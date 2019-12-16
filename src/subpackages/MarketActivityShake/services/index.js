// 认证服务
import { authorizeService } from './authorize.service';
import { memberInfoService } from './memberinfo.service';
// 关系
import { relationshipService } from './relationship.service';
// 红包
import { redpacketService } from './redpacket.service';
// 卡券中心
import { couponcenterService } from './couponcenter.service';
import { noActivityService } from './no-activity.service';
import { countingMoneyService } from './counting-money.service';
import { answerService } from './answer.service';

export const AuthorizeService = authorizeService;
export const MemberInfoService = memberInfoService;
export const RelationshipService = relationshipService;
export const RedpacketService = redpacketService;
export const CouponCenterService = couponcenterService;
export const NoActivityService = noActivityService;
export const CountingMoneyService = countingMoneyService;
export const AnswerService = answerService;
