pragma solidity ^0.4.24;

contract edb {

    struct edata {
        string smth;
        uint snumber;
    }

    mapping (address => edata) private sdata;

    function store(address adr , string str, uint num) public {
        sdata[adr].smth = str;
        sdata[adr].snumber = num;
    }

    function getsmth(address adr) public view returns(string mth) {
        mth = sdata[adr].smth;
    }

    function getnum(address adr) public view returns(uint num) {
      num = sdata[adr].snumber;
    }

}
