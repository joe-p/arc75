import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class ARC75 extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: {}, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKCWIgbWFpbgoKdmVyaWZ5TUJSUGF5bWVudDoKCXByb3RvIDIgMAoKCS8vIGFyYzc1LmFsZ28udHM6MTAKCS8vIGFzc2VydChwYXltZW50LmFtb3VudCA9PT0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlIC0gcHJlTUJSKQoJZnJhbWVfZGlnIC0xIC8vIHBheW1lbnQ6IHBheQoJZ3R4bnMgQW1vdW50Cgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0CglmcmFtZV9kaWcgLTIgLy8gcHJlTUJSOiB1aW50NjQKCS0KCT09Cglhc3NlcnQKCgkvLyBhcmM3NS5hbGdvLnRzOjExCgkvLyBhc3NlcnQocGF5bWVudC5yZWNlaXZlciA9PT0gdGhpcy5hcHAuYWRkcmVzcykKCWZyYW1lX2RpZyAtMSAvLyBwYXltZW50OiBwYXkKCWd0eG5zIFJlY2VpdmVyCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCT09Cglhc3NlcnQKCXJldHN1YgoKc2VuZE1CUlBheW1lbnQ6Cglwcm90byAxIDAKCgkvLyBhcmM3NS5hbGdvLnRzOjE1CgkvLyBzZW5kUGF5bWVudCh7CglpdHhuX2JlZ2luCglpbnQgcGF5CglpdHhuX2ZpZWxkIFR5cGVFbnVtCgoJLy8gYXJjNzUuYWxnby50czoxNgoJLy8gc2VuZGVyOiB0aGlzLmFwcC5hZGRyZXNzCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWl0eG5fZmllbGQgU2VuZGVyCgoJLy8gYXJjNzUuYWxnby50czoxNwoJLy8gcmVjZWl2ZXI6IHRoaXMudHhuLnNlbmRlcgoJdHhuIFNlbmRlcgoJaXR4bl9maWVsZCBSZWNlaXZlcgoKCS8vIGFyYzc1LmFsZ28udHM6MTgKCS8vIGFtb3VudDogcHJlTUJSIC0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlCglmcmFtZV9kaWcgLTEgLy8gcHJlTUJSOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJYWNjdF9wYXJhbXNfZ2V0IEFjY3RNaW5CYWxhbmNlCglhc3NlcnQKCS0KCWl0eG5fZmllbGQgQW1vdW50CgoJLy8gYXJjNzUuYWxnby50czoxOQoJLy8gZmVlOiAwCglpbnQgMAoJaXR4bl9maWVsZCBGZWUKCWl0eG5fc3VibWl0CglyZXRzdWIKCmFiaV9yb3V0ZV9hZGRBcHBUb1doaXRlTGlzdDoKCXR4biBPbkNvbXBsZXRpb24KCWludCBOb09wCgk9PQoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgkhPQoJJiYKCWFzc2VydAoJYnl0ZSAweAoJZHVwbiAyCgl0eG4gR3JvdXBJbmRleAoJaW50IDEKCS0KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWJ0b2kKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWNhbGxzdWIgYWRkQXBwVG9XaGl0ZUxpc3QKCWludCAxCglyZXR1cm4KCmFkZEFwcFRvV2hpdGVMaXN0OgoJcHJvdG8gNyAwCgoJLy8gYXJjNzUuYWxnby50czozMwoJLy8gcHJlTUJSID0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0CglmcmFtZV9idXJ5IC01IC8vIHByZU1CUjogdWludDY0CgoJLy8gYXJjNzUuYWxnby50czozNAoJLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QgPSB7IGFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwgYm94SW5kZXg6IGJveEluZGV4LCBhcmM6IGFyYyB9Cgl0eG4gU2VuZGVyCglmcmFtZV9kaWcgLTIgLy8gYm94SW5kZXg6IHVpbnQxNgoJY29uY2F0CglmcmFtZV9kaWcgLTEgLy8gYXJjOiB1aW50MTYKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoKCS8vIGlmMF9jb25kaXRpb24KCS8vIGFyYzc1LmFsZ28udHM6MzYKCS8vIHRoaXMud2hpdGVsaXN0LmV4aXN0cyh3aGl0ZWxpc3QpCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCXN3YXAKCXBvcAoJYnogaWYwX2Vsc2UKCgkvLyBpZjBfY29uc2VxdWVudAoJLy8gYXJjNzUuYWxnby50czozNwoJLy8gdGhpcy53aGl0ZWxpc3QuZ2V0KHdoaXRlbGlzdCkucHVzaChhcHBJRCkKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJYm94X2dldAoJYXNzZXJ0CglkdXAKCWludCAwCglleHRyYWN0X3VpbnQxNgoJaW50IDEKCSsKCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCglleHRyYWN0IDIgMAoJY29uY2F0CglmcmFtZV9kaWcgLTMgLy8gYXBwSUQ6IHVpbnQ2NAoJaXRvYgoJY29uY2F0CglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CgliIGlmMF9lbmQKCmlmMF9lbHNlOgoJLy8gYXJjNzUuYWxnby50czozOQoJLy8gbmV3V2hpdGVsaXN0OiB1aW50NjRbXSA9IFthcHBJRF0KCWJ5dGUgMHgwMDAxCglmcmFtZV9kaWcgLTMgLy8gYXBwSUQ6IHVpbnQ2NAoJaXRvYgoJY29uY2F0CglmcmFtZV9idXJ5IC03IC8vIG5ld1doaXRlbGlzdDogdWludDY0W10KCgkvLyBhcmM3NS5hbGdvLnRzOjQwCgkvLyB0aGlzLndoaXRlbGlzdC5wdXQod2hpdGVsaXN0LCBuZXdXaGl0ZWxpc3QpCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWR1cAoJYm94X2RlbAoJcG9wCglmcmFtZV9kaWcgLTcgLy8gbmV3V2hpdGVsaXN0OiB1aW50NjRbXQoJYm94X3B1dAoKaWYwX2VuZDoKCS8vIGFyYzc1LmFsZ28udHM6NDMKCS8vIHRoaXMudmVyaWZ5TUJSUGF5bWVudChwYXltZW50LCBwcmVNQlIpCglieXRlIDB4Cglwb3AKCWZyYW1lX2RpZyAtNSAvLyBwcmVNQlI6IHVpbnQ2NAoJZnJhbWVfZGlnIC00IC8vIHBheW1lbnQ6IHBheQoJY2FsbHN1YiB2ZXJpZnlNQlJQYXltZW50CglyZXRzdWIKCmFiaV9yb3V0ZV9zZXRBcHBXaGl0ZWxpc3Q6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJIT0KCSYmCglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJY2FsbHN1YiBzZXRBcHBXaGl0ZWxpc3QKCWludCAxCglyZXR1cm4KCnNldEFwcFdoaXRlbGlzdDoKCXByb3RvIDUgMAoKCS8vIGFyYzc1LmFsZ28udHM6NTUKCS8vIHByZU1CUiA9IHRoaXMuYXBwLmFkZHJlc3MubWluQmFsYW5jZQoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglhY2N0X3BhcmFtc19nZXQgQWNjdE1pbkJhbGFuY2UKCWFzc2VydAoJZnJhbWVfYnVyeSAtNCAvLyBwcmVNQlI6IHVpbnQ2NAoKCS8vIGFyYzc1LmFsZ28udHM6NTYKCS8vIHdoaXRlbGlzdDogV2hpdGVsaXN0ID0geyBhY2NvdW50OiB0aGlzLnR4bi5zZW5kZXIsIGJveEluZGV4OiBib3hJbmRleCwgYXJjOiBhcmMgfQoJdHhuIFNlbmRlcgoJZnJhbWVfZGlnIC0yIC8vIGJveEluZGV4OiB1aW50MTYKCWNvbmNhdAoJZnJhbWVfZGlnIC0xIC8vIGFyYzogdWludDE2Cgljb25jYXQKCWZyYW1lX2J1cnkgLTUgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCgkvLyBhcmM3NS5hbGdvLnRzOjU4CgkvLyB0aGlzLndoaXRlbGlzdC5kZWxldGUod2hpdGVsaXN0KQoJZnJhbWVfZGlnIC01IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0Cglib3hfZGVsCgoJLy8gYXJjNzUuYWxnby50czo2MAoJLy8gdGhpcy53aGl0ZWxpc3QucHV0KHdoaXRlbGlzdCwgYXBwSURzKQoJZnJhbWVfZGlnIC01IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0CglkdXAKCWJveF9kZWwKCXBvcAoJZnJhbWVfZGlnIC0zIC8vIGFwcElEczogdWludDY0W10KCWJveF9wdXQKCgkvLyBpZjFfY29uZGl0aW9uCgkvLyBhcmM3NS5hbGdvLnRzOjYyCgkvLyBwcmVNQlIgPiB0aGlzLmFwcC5hZGRyZXNzLm1pbkJhbGFuY2UKCWZyYW1lX2RpZyAtNCAvLyBwcmVNQlI6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglhY2N0X3BhcmFtc19nZXQgQWNjdE1pbkJhbGFuY2UKCWFzc2VydAoJPgoJYnogaWYxX2Vsc2UKCgkvLyBpZjFfY29uc2VxdWVudAoJLy8gYXJjNzUuYWxnby50czo2MwoJLy8gdGhpcy5zZW5kTUJSUGF5bWVudChwcmVNQlIpCglieXRlIDB4Cglwb3AKCWZyYW1lX2RpZyAtNCAvLyBwcmVNQlI6IHVpbnQ2NAoJY2FsbHN1YiBzZW5kTUJSUGF5bWVudAoJYiBpZjFfZW5kCgppZjFfZWxzZToKCS8vIGFyYzc1LmFsZ28udHM6NjUKCS8vIHRoaXMudmVyaWZ5TUJSUGF5bWVudCh0aGlzLnR4bkdyb3VwW3RoaXMudHhuLmdyb3VwSW5kZXggLSAxXSwgcHJlTUJSKQoJYnl0ZSAweAoJcG9wCglmcmFtZV9kaWcgLTQgLy8gcHJlTUJSOiB1aW50NjQKCXR4biBHcm91cEluZGV4CglpbnQgMQoJLQoJY2FsbHN1YiB2ZXJpZnlNQlJQYXltZW50CgppZjFfZW5kOgoJcmV0c3ViCgphYmlfcm91dGVfZGVsZXRlV2hpdGVsaXN0OgoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09Cgl0eG4gQXBwbGljYXRpb25JRAoJaW50IDAKCSE9CgkmJgoJYXNzZXJ0CglieXRlIDB4CglkdXBuIDEKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWNhbGxzdWIgZGVsZXRlV2hpdGVsaXN0CglpbnQgMQoJcmV0dXJuCgpkZWxldGVXaGl0ZWxpc3Q6Cglwcm90byA0IDAKCgkvLyBhcmM3NS5hbGdvLnRzOjc3CgkvLyBwcmVNQlIgPSB0aGlzLmFwcC5hZGRyZXNzLm1pbkJhbGFuY2UKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJYWNjdF9wYXJhbXNfZ2V0IEFjY3RNaW5CYWxhbmNlCglhc3NlcnQKCWZyYW1lX2J1cnkgLTMgLy8gcHJlTUJSOiB1aW50NjQKCgkvLyBhcmM3NS5hbGdvLnRzOjc4CgkvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdCA9IHsgYWNjb3VudDogdGhpcy50eG4uc2VuZGVyLCBib3hJbmRleDogYm94SW5kZXgsIGFyYzogYXJjIH0KCXR4biBTZW5kZXIKCWZyYW1lX2RpZyAtMiAvLyBib3hJbmRleDogdWludDE2Cgljb25jYXQKCWZyYW1lX2RpZyAtMSAvLyBhcmM6IHVpbnQxNgoJY29uY2F0CglmcmFtZV9idXJ5IC00IC8vIHdoaXRlbGlzdDogV2hpdGVsaXN0CgoJLy8gYXJjNzUuYWxnby50czo4MAoJLy8gdGhpcy53aGl0ZWxpc3QuZGVsZXRlKHdoaXRlbGlzdCkKCWZyYW1lX2RpZyAtNCAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJYm94X2RlbAoKCS8vIGFyYzc1LmFsZ28udHM6ODIKCS8vIHRoaXMuc2VuZE1CUlBheW1lbnQocHJlTUJSKQoJYnl0ZSAweAoJcG9wCglmcmFtZV9kaWcgLTMgLy8gcHJlTUJSOiB1aW50NjQKCWNhbGxzdWIgc2VuZE1CUlBheW1lbnQKCXJldHN1YgoKYWJpX3JvdXRlX2RlbGV0ZUFwcEZyb21XaGl0ZWxpc3Q6Cgl0eG4gT25Db21wbGV0aW9uCglpbnQgTm9PcAoJPT0KCXR4biBBcHBsaWNhdGlvbklECglpbnQgMAoJIT0KCSYmCglhc3NlcnQKCWJ5dGUgMHgKCWR1cG4gMgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNAoJYnRvaQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJY2FsbHN1YiBkZWxldGVBcHBGcm9tV2hpdGVsaXN0CglpbnQgMQoJcmV0dXJuCgpkZWxldGVBcHBGcm9tV2hpdGVsaXN0OgoJcHJvdG8gNyAwCgoJLy8gYXJjNzUuYWxnby50czo5NAoJLy8gcHJlTUJSID0gdGhpcy5hcHAuYWRkcmVzcy5taW5CYWxhbmNlCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBBZGRyZXNzCglhc3NlcnQKCWFjY3RfcGFyYW1zX2dldCBBY2N0TWluQmFsYW5jZQoJYXNzZXJ0CglmcmFtZV9idXJ5IC01IC8vIHByZU1CUjogdWludDY0CgoJLy8gYXJjNzUuYWxnby50czo5NQoJLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QgPSB7IGFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwgYm94SW5kZXg6IGJveEluZGV4LCBhcmM6IGFyYyB9Cgl0eG4gU2VuZGVyCglmcmFtZV9kaWcgLTIgLy8gYm94SW5kZXg6IHVpbnQxNgoJY29uY2F0CglmcmFtZV9kaWcgLTEgLy8gYXJjOiB1aW50MTYKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoKCS8vIGFyYzc1LmFsZ28udHM6OTcKCS8vIHNwbGljZWQgPSB0aGlzLndoaXRlbGlzdC5nZXQod2hpdGVsaXN0KS5zcGxpY2UoaW5kZXgsIDEpCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJaW50IDAKCWV4dHJhY3RfdWludDE2CglpbnQgMQoJLQoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2RpZyAtNCAvLyBpbmRleDogdWludDY0CglpbnQgOAoJKgoJaW50IDIKCSsKCXN0b3JlIDEyIC8vIHNwbGljZSBzdGFydAoJaW50IDEKCWludCA4CgkqCglpbnQgOAoJKwoJc3RvcmUgMTMgLy8gc3BsaWNlIGJ5dGUgbGVuZ3RoCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJaW50IDIKCWxvYWQgMTIgLy8gc3BsaWNlIHN0YXJ0CglzdWJzdHJpbmczCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWJveF9nZXQKCWFzc2VydAoJZHVwCglsZW4KCWxvYWQgMTIgLy8gc3BsaWNlIHN0YXJ0Cglsb2FkIDEzIC8vIHNwbGljZSBieXRlIGxlbmd0aAoJKwoJaW50IDgKCS0KCXN3YXAKCXN1YnN0cmluZzMKCWNvbmNhdAoJY29uY2F0CglpbnQgMQoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2RpZyAtNiAvLyB3aGl0ZWxpc3Q6IFdoaXRlbGlzdAoJYm94X2dldAoJYXNzZXJ0Cglsb2FkIDEyIC8vIHNwbGljZSBzdGFydAoJbG9hZCAxMyAvLyBzcGxpY2UgYnl0ZSBsZW5ndGgKCWludCA4CgktCglleHRyYWN0MwoJY29uY2F0Cglzd2FwCglmcmFtZV9kaWcgLTYgLy8gd2hpdGVsaXN0OiBXaGl0ZWxpc3QKCWR1cAoJYm94X2RlbAoJcG9wCglzd2FwCglib3hfcHV0CglmcmFtZV9idXJ5IC03IC8vIHNwbGljZWQ6IHVpbnQ2NFtdCgoJLy8gYXJjNzUuYWxnby50czo5OQoJLy8gYXNzZXJ0KHNwbGljZWRbMF0gPT09IGFwcElEKQoJZnJhbWVfZGlnIC03IC8vIHNwbGljZWQ6IHVpbnQ2NFtdCglpbnQgMAoJaW50IDgKCSoKCWludCAyCgkrCglpbnQgOAoJZXh0cmFjdDMKCWJ0b2kKCWZyYW1lX2RpZyAtMyAvLyBhcHBJRDogdWludDY0Cgk9PQoJYXNzZXJ0CgoJLy8gYXJjNzUuYWxnby50czoxMDEKCS8vIHRoaXMuc2VuZE1CUlBheW1lbnQocHJlTUJSKQoJYnl0ZSAweAoJcG9wCglmcmFtZV9kaWcgLTUgLy8gcHJlTUJSOiB1aW50NjQKCWNhbGxzdWIgc2VuZE1CUlBheW1lbnQKCXJldHN1YgoKbWFpbjoKCXR4biBOdW1BcHBBcmdzCglibnogcm91dGVfYWJpCgoJLy8gZGVmYXVsdCBjcmVhdGVBcHBsaWNhdGlvbgoJdHhuIEFwcGxpY2F0aW9uSUQKCWludCAwCgk9PQoJdHhuIE9uQ29tcGxldGlvbgoJaW50IE5vT3AKCT09CgkmJgoJcmV0dXJuCgpyb3V0ZV9hYmk6CgltZXRob2QgImFkZEFwcFRvV2hpdGVMaXN0KHVpbnQxNix1aW50MTYsdWludDY0LHBheSl2b2lkIgoJbWV0aG9kICJzZXRBcHBXaGl0ZWxpc3QodWludDE2LHVpbnQxNix1aW50NjRbXSl2b2lkIgoJbWV0aG9kICJkZWxldGVXaGl0ZWxpc3QodWludDE2LHVpbnQxNil2b2lkIgoJbWV0aG9kICJkZWxldGVBcHBGcm9tV2hpdGVsaXN0KHVpbnQxNix1aW50MTYsdWludDY0LHVpbnQ2NCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2FkZEFwcFRvV2hpdGVMaXN0IGFiaV9yb3V0ZV9zZXRBcHBXaGl0ZWxpc3QgYWJpX3JvdXRlX2RlbGV0ZVdoaXRlbGlzdCBhYmlfcm91dGVfZGVsZXRlQXBwRnJvbVdoaXRlbGlzdA==";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50IDEKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "addAppToWhiteList", desc: "", args: [{ type: "uint16", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64", name: "appID", desc: "" }, { type: "pay", name: "payment", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "setAppWhitelist", desc: "", args: [{ type: "uint16", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64[]", name: "appIDs", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "deleteWhitelist", desc: "", args: [{ type: "uint16", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "deleteAppFromWhitelist", desc: "", args: [{ type: "uint16", name: "arc", desc: "" }, { type: "uint16", name: "boxIndex", desc: "" }, { type: "uint64", name: "appID", desc: "" }, { type: "uint64", name: "index", desc: "" }], returns: { type: "void", desc: "" } })
    ];
    async addAppToWhiteList(args: {
        arc: bigint;
        boxIndex: bigint;
        appID: bigint;
        payment: algosdk.TransactionWithSigner | algosdk.Transaction;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this._execute(await this.compose.addAppToWhiteList({ arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, payment: args.payment }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async setAppWhitelist(args: {
        arc: bigint;
        boxIndex: bigint;
        appIDs: bigint[];
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this._execute(await this.compose.setAppWhitelist({ arc: args.arc, boxIndex: args.boxIndex, appIDs: args.appIDs }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async deleteWhitelist(args: {
        arc: bigint;
        boxIndex: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this._execute(await this.compose.deleteWhitelist({ arc: args.arc, boxIndex: args.boxIndex }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async deleteAppFromWhitelist(args: {
        arc: bigint;
        boxIndex: bigint;
        appID: bigint;
        index: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this._execute(await this.compose.deleteAppFromWhitelist({ arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, index: args.index }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    compose = {
        addAppToWhiteList: async (args: {
            arc: bigint;
            boxIndex: bigint;
            appID: bigint;
            payment: algosdk.TransactionWithSigner | algosdk.Transaction;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this._addMethodCall(algosdk.getMethodByName(this.methods, "addAppToWhiteList"), { arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, payment: args.payment }, txnParams, atc);
        },
        setAppWhitelist: async (args: {
            arc: bigint;
            boxIndex: bigint;
            appIDs: bigint[];
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this._addMethodCall(algosdk.getMethodByName(this.methods, "setAppWhitelist"), { arc: args.arc, boxIndex: args.boxIndex, appIDs: args.appIDs }, txnParams, atc);
        },
        deleteWhitelist: async (args: {
            arc: bigint;
            boxIndex: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this._addMethodCall(algosdk.getMethodByName(this.methods, "deleteWhitelist"), { arc: args.arc, boxIndex: args.boxIndex }, txnParams, atc);
        },
        deleteAppFromWhitelist: async (args: {
            arc: bigint;
            boxIndex: bigint;
            appID: bigint;
            index: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this._addMethodCall(algosdk.getMethodByName(this.methods, "deleteAppFromWhitelist"), { arc: args.arc, boxIndex: args.boxIndex, appID: args.appID, index: args.index }, txnParams, atc);
        }
    };
}
