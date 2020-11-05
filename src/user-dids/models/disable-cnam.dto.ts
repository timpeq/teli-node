import {RequireOnlyOne} from "../../shared/types/require";

interface DisableCnamBaseDto {
    did_id: number;
    number: number;
}

type DisableCnamDto = RequireOnlyOne<DisableCnamBaseDto, 'did_id' | 'number'>

export default DisableCnamDto;
