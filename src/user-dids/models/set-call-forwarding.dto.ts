import {RequireOnlyOne} from "../../shared/types/require.ts";

interface SetCallForwardingBaseDto {
    did_id?: number;
    did_number?: number;
    forward_to: number;
}
type SetCallForwardingDto = RequireOnlyOne<SetCallForwardingBaseDto, 'did_id' | 'did_number'>

export default SetCallForwardingDto;
