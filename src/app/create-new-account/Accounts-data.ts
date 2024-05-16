//import account model
import { Account } from './Account';

//create array of account
export const Accounts:Account[]=[
    {
        accountNumber:'123456789',
        accountName:'Account1',
        accountType:'Savings',
        accountStatus:'Active',
        accountOpenDate:new Date('2021-09-01'),
        accountCloseDate:'',
        IFSCCode:'SBIN0000001',
        MICRCode:'123456789',
        EmailId:'Account1@gmail.com',
        AccountBalance:10000,
        BranchName:'Mumbai',
        MobileNumber:9876543210
    },
    {
        accountNumber:'987654321',
        accountName:'Account2',
        accountType:'Current',
        accountStatus:'Active',
        accountOpenDate:new Date('2021-09-01'),
        accountCloseDate:'',
        IFSCCode:'SBIN0000001',
        MICRCode:'123456789',
        EmailId:'',
        AccountBalance:20000,
        BranchName:'Chennai',
        MobileNumber:9876543210
    },
    {
        accountNumber:'456789123',
        accountName:'Account3',
        accountType:'Current',
        accountStatus:'Active',
        accountOpenDate:new Date('2021-09-01'),
        accountCloseDate:'',
        IFSCCode:'SBIN0000001',
        MICRCode:'123456789',
        EmailId:'',
        AccountBalance:30000,
        BranchName:'Bangalore',
        MobileNumber:9876543210
    },
    {
        accountNumber:'789123456',
        accountName:'Account4',
        accountType:'Savings',
        accountStatus:'Active',
        accountOpenDate:new Date('2021-09-01'),
        accountCloseDate:'',
        IFSCCode:'SBIN0000001',
        MICRCode:'123456789',
        EmailId:'',
        AccountBalance:40000,
        BranchName:'Mumbai',
        MobileNumber:9876543210
    }
]
