type ErrorRules = Record<string, Record<string, unknown> | string | number | unknown[]>;
type WarnRules = ErrorRules;
type OffRules = string[];