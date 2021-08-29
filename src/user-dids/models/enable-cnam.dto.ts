import {RequireOnlyOne} from "../../shared/types/require.ts";

interface EnableCnamBaseDto {
    did_id: number;
    number: number;
}

type EnableCnamDto = RequireOnlyOne<EnableCnamBaseDto, 'did_id' | 'number'>

export default EnableCnamDto;
