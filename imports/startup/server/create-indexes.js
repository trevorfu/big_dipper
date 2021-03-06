import { Blockscon } from '../../api/blocks/blocks.js';
import { Proposals } from '../../api/proposals/proposals.js';
import { ValidatorRecords, Analytics, MissedBlocksStats } from '../../api/records/records.js';
// import { Status } from '../../api/status/status.js';
import { Transactions } from '../../api/transactions/transactions.js';
import { ValidatorSets } from '../../api/validator-sets/validator-sets.js';
import { Validators } from '../../api/validators/validators.js';
import { VotingPowerHistory } from '../../api/voting-power/history.js';

Blockscon.rawCollection().createIndex({height: -1},{unique:true});

Proposals.rawCollection().createIndex({proposalId: 1}, {unique:true});

ValidatorRecords.rawCollection().createIndex({address:1,height: -1}, {unique:1});

Analytics.rawCollection().createIndex({height: -1}, {unique:true})

MissedBlocksStats.rawCollection().createIndex({proposer:1});
MissedBlocksStats.rawCollection().createIndex({voter:1});
MissedBlocksStats.rawCollection().createIndex({proposer:1, voter:1},{unique:true});

// Status.rawCollection.createIndex({})

Transactions.rawCollection().createIndex({hash:1},{unique:true});
Transactions.rawCollection().createIndex({height:-1});
Transactions.rawCollection().createIndex({type:1});

ValidatorSets.rawCollection().createIndex({height:-1});

Validators.rawCollection().createIndex({address:1});

VotingPowerHistory.rawCollection().createIndex({address:1,height:-1});
VotingPowerHistory.rawCollection().createIndex({type:1});


