Dont read me

...

Since you read, you might need this:

run ganache, listen on 7545 (please)

run `deploy.bat` (Windows) or `deploy.sh` (Linux/maybe even Mac?? idk im poor).

this will deploy/migrate the edb SmartContract into your local eth chain (Ganache).

edb does two things:

Store two data (smth (string) and snum (uint256)), associated with the address (need PrivateKey to store!)

Get smth/snum for given address (public, no PrivateKey needed)

once deployed, goto web/index.html, it is an interface (for end user?) to interact with edb (provided they have their own address and PKey, integration with MetaMask not done (not expected, im lazy lewl))

the usage of web interface should be straightforward (no local webserver/whatever needed to open, just double click, its all javascript)

# dappp
RM10000 thks