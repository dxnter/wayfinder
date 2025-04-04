import { expect, test } from "vitest";
import DisallowedMethodNameController, {
    deleteMethod,
    method404,
} from "../workbench/resources/js/actions/App/Http/Controllers/DisallowedMethodNameController";

test("will append `method` to invalid methods", () => {
    expect(method404.url()).toBe("/disallowed/404");
    expect(deleteMethod.url()).toBe("/disallowed/delete");
    expect(DisallowedMethodNameController.delete.url()).toBe(
        "/disallowed/delete",
    );
    expect(DisallowedMethodNameController[404].url()).toBe("/disallowed/404");
});
