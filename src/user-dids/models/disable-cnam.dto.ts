import {RequireOnlyOne} from "../../shared/types/require.ts";

interface DisableCnamBaseDto {

    did_id: number;
    number: number;
}

type DisableCnamDto = RequireOnlyOne<DisableCnamBaseDto, 'did_id' | 'number'>

export default DisableCnamDto;
