import { Contract } from '@algorandfoundation/tealscript';

type Whitelist = {account: Address, boxIndex: uint16, arc: uint16};

// eslint-disable-next-line no-unused-vars
class ARC75 extends Contract {
  whitelist = new BoxMap<Whitelist, Address[]>();

  private verifyMBRPayment(payment: PayTxn, preMBR: uint64): void {
    assert(payment.amount === this.app.address.minBalance - preMBR);
    assert(payment.receiver === this.app.address);
  }

  private sendMBRPayment(preMBR: uint64): void {
    sendPayment({
      sender: this.app.address,
      receiver: this.txn.sender,
      amount: preMBR - this.app.address.minBalance,
      fee: 0,
    });
  }

  /**
   * Add address to whitelist box
   *
   * @param arc - The ARC the whitelist corresponds to
   * @param boxIndex - The index of the whitelist box to add the address to
   * @param addr - The address to add to the whitelist
   * @param payment - The payment transaction to cover the MBR change
   *
   */
  addToWhitelist(arc: uint16, boxIndex: uint16, addr: Address, payment: PayTxn): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: boxIndex, arc: arc };

    if (this.whitelist.exists(whitelist)) {
      this.whitelist.get(whitelist).push(addr);
    } else {
      const newWhitelist: Address[] = [addr];
      this.whitelist.put(whitelist, newWhitelist);
    }

    this.verifyMBRPayment(payment, preMBR);
  }

  /**
   * Sets a address whitelist for the sender. Should only be used when adding/removing
   * more than one address
   *
   * @param boxIndex - The index of the whitelist box to put the addresses in
   * @param addrs - Array of addresses that signify the whitelisted addresses
   *
   */
  setWhitelist(arc: uint16, boxIndex: uint16, addrs: Address[]): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: boxIndex, arc: arc };

    this.whitelist.delete(whitelist);

    this.whitelist.put(whitelist, addrs);

    if (preMBR > this.app.address.minBalance) {
      this.sendMBRPayment(preMBR);
    } else {
      this.verifyMBRPayment(this.txnGroup[this.txn.groupIndex - 1], preMBR);
    }
  }

  /**
   * Deletes a address whitelist for the sender
   *
   * @param arc - The ARC the whitelist corresponds to
   * @param boxIndex - The index of the whitelist box to delete
   *
   */
  deleteWhitelist(arc: uint16, boxIndex: uint16): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: boxIndex, arc: arc };

    this.whitelist.delete(whitelist);

    this.sendMBRPayment(preMBR);
  }

  /**
   * Deletes a address from a whitelist for the sender
   *
   * @param boxIndex - The index of the whitelist box to delete from
   * @param addr - The address to delete from the whitelist
   * @param index - The index of the address in the whitelist
   *
   */
  deleteFromWhitelist(arc: uint16, boxIndex: uint16, addr: Address, index: uint64): void {
    const preMBR = this.app.address.minBalance;
    const whitelist: Whitelist = { account: this.txn.sender, boxIndex: boxIndex, arc: arc };

    const spliced = this.whitelist.get(whitelist).splice(index, 1);

    assert(spliced[0] === addr);

    this.sendMBRPayment(preMBR);
  }

  /**
   * Verifies that the sender is in the whitelist
   *
   * @param boxIndex - The index of the whitelist box to delete from
   * @param index - The index of the address in the whitelist
   *
   */
    verifySender(arc: uint16, boxIndex: uint16, index: uint64): void {
      const whitelist: Whitelist = { account: this.txn.sender, boxIndex: boxIndex, arc: arc };

      const whitelistAddr = this.whitelist.get(whitelist)[index];
      assert(whitelistAddr === this.txn.sender);
    }
}
