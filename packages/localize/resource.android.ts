import { convertPlaceholders } from './placeholder';
import { replace } from './resource.common';

export { encodeKey } from './resource.common';

export function encodeValue(value: string): string {
	return '"' + replace(["'", '"', '\\', '\n', '\r', '\t', '<', '&'], ["\\'", '\\"', '\\\\', '\\n', '\\r', '\\t', '&lt;', '&amp;'], convertPlaceholders(value)) + '"';
}
