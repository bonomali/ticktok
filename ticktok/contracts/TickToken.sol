pragma solidity ^0.4.24;

contract TickTok {
  TokeVent private eDtail_;
  address private owner_;

  constructor(string _e, string _o) public  {
    eDtail_.EventTitle = _e;
    eDtail_.Organizer = _o;
//    eDtail_.Timestamp = _t;
    owner_ = msg.sender;
  }

  struct TokeVent {
      string EventTitle;
      string Organizer;
      string Timestamp;
  }

  mapping (address => string) private token;
  mapping (uint256 => uint256) private cap;
  mapping (uint256 => string) private classStr;
  mapping (uint256 => uint256) private sold;

  function setClassStr(uint256 class, string _classStr) public {
      classStr[class] = _classStr;
  }

  function getClassStr(uint256 class) public view returns (string) {
    return classStr[class];
  }

  function updateCap(uint256 class, uint256 nCap) public {
    assert(msg.sender == owner_);
    cap[class] = nCap;
  }

  function sellToken(address target, string str, uint256 class, uint256 amount) public {
      assert(msg.sender == owner_);
      assert(sold[class] + amount <= cap[class]);
      token[target] = str;
      sold[class] += amount;
  }

  function transferToken(address from, string n_fStr, address to, string n_tStr) public {
      assert(msg.sender == owner_);
      token[from] = n_fStr;
      token[to] = n_tStr;
  }

  function getToken(address target) public view returns (string) {
      return token[target];
  }

  function getEventTitle()  public view returns (string) {
      return eDtail_.EventTitle;
  }

  function getOrganizer()  public view returns (string) {
      return eDtail_.Organizer;
  }

  function getTimestamp()  public view returns (string) {
      return eDtail_.Timestamp;
  }
}
