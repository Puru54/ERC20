// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title PhilanthroToken Contract
 */

contract PhilanthroToken is ERC20 {
    string public name = "PhilanthroToken";
    string public desc = "A Token for Charitable Giving";
    string public symbol = "XEV";
    uint8 public decimals = 2;
    uint256 public INITIAL_SUPPLY = 1000000000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    mapping(address => uint256) public tokenBalances;
    uint256 public tokenConversionRate = 1000; // 1 Ether = 1000 tokens (adjust as needed)

    function purchaseTokens() public payable {
        require(msg.value > 0, "Ether amount must be greater than zero");
        uint256 tokenAmount = (msg.value / 1e18) * tokenConversionRate;
        _mint(msg.sender, tokenAmount);
        tokenBalances[msg.sender] += tokenAmount;
    }

    struct Campaign {
        address payable owner;
        uint256 id;
        string title;
        string description;
        string location;
        uint256 targetAmount;
        uint256 endDate;
        uint256 amountRaised;
        bool completed;
        string image;
        address[] donors;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount = 0;

    function createCampaign(
        string memory _title,
        string memory _description,
        string memory _location,
        uint256 _targetAmount,
        uint256 _endDate,
        string memory _image
    ) public {
        require(_targetAmount > 0, "Target amount must be greater than zero");
        require(_endDate > block.timestamp, "End date must be in the future");

        campaignCount++;
        Campaign storage newCampaign = campaigns[campaignCount];
        newCampaign.owner = msg.sender;
        newCampaign.id = campaignCount++;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.location = _location;
        newCampaign.targetAmount = _targetAmount;
        newCampaign.endDate = _endDate;
        newCampaign.image = _image;
        newCampaign.amountRaised = 0;
        newCampaign.completed = false;
        newCampaign.donations = new uint256[](0);
        newCampaign.donors = new address[](0);
    }

    // function donateTokensToCampaign(
    //     uint256 _campaignId,
    //     uint256 _tokenAmount
    // ) public {
    //     require(_campaignId < campaignCount, "Invalid campaign ID");
    //     require(_tokenAmount > 0, "Donation amount must be greater than zero");
    //     require(
    //         tokenBalances[msg.sender] >= _tokenAmount,
    //         "Insufficient token balance"
    //     );

    //     Campaign storage campaign = campaigns[_campaignId];

    //     require(!campaign.completed, "Campaign is already completed");
    //     require(block.timestamp <= campaign.endDate, "Campaign has ended");
    //     transfer(campaign.owner, _tokenAmount);
    //     tokenBalances[msg.sender] -= _tokenAmount;
    //     tokenBalances[campaign.owner] += _tokenAmount;
    //     campaign.amountRaised += _tokenAmount;
    //     campaign.donors.push(msg.sender);
    //     campaign.donations.push(_tokenAmount);
    // }

    function registerTransfer(
        address _sender,
        address _owner,
        uint256 _tokenAmount,
        uint256 _campaignID
    ) public {
        Campaign storage campaign = campaigns[_campaignID];
        // require(!campaign.completed, "Campaign is already completed");
        // require(block.timestamp <= campaign.endDate, "Campaign has ended");
        tokenBalances[_sender] -= _tokenAmount;
        tokenBalances[_owner] += _tokenAmount;
        campaign.amountRaised += _tokenAmount;
        campaign.donors.push(_sender);
        campaign.donations.push(_tokenAmount);
    }

    function getCampaignById(
        uint256 _campaignId
    )
        public
        view
        returns (
            address payable owner,
            string memory title,
            string memory description,
            uint256 targetAmount,
            uint256 endDate,
            uint256 amountRaised,
            bool completed,
            string memory image,
            address[] memory donors,
            uint256[] memory donations
        )
    {
        require(_campaignId < campaignCount, "Invalid campaign ID");

        Campaign storage campaign = campaigns[_campaignId];

        owner = campaign.owner;
        title = campaign.title;
        description = campaign.description;
        targetAmount = campaign.targetAmount;
        endDate = campaign.endDate;
        amountRaised = campaign.amountRaised;
        completed = campaign.completed;
        image = campaign.image;
        donors = campaign.donors;
        donations = campaign.donations;
    }

    function getAllCampaigns() public view returns (uint256[] memory) {
        uint256[] memory campaignIds = new uint256[](campaignCount);
        for (uint256 i = 0; i < campaignCount; i++) {
            campaignIds[i] = i;
        }
        return campaignIds;
    }
}
