/* tslint:disable */
/* eslint-disable */
/**
* @param {number} f 
* @returns {string} 
*/
export function f64_as_f32(f: number): string;
/**
* @param {string} s 
* @returns {string} 
*/
export function str_as_f32(s: string): string;
/**
* @param {number} a 
* @param {number} b 
* @returns {string} 
*/
export function add_f32(a: number, b: number): string;
/**
* @param {number} a 
* @param {number} b 
* @returns {string} 
*/
export function sub_f32(a: number, b: number): string;
/**
* @param {number} a 
* @param {number} b 
* @returns {string} 
*/
export function div_f32(a: number, b: number): string;
/**
* @param {number} a 
* @param {number} b 
* @returns {string} 
*/
export function mul_f32(a: number, b: number): string;
/**
* @param {number} a 
* @param {number} b 
* @returns {string} 
*/
export function rem_f32(a: number, b: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function acos_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function acosh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function asin_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function asinh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function atan_f32(f: number): string;
/**
* @param {number} f 
* @param {number} other 
* @returns {string} 
*/
export function atan2_f32(f: number, other: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function atanh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function cbrt_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function cos_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function cosh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function exp_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function exp2_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function exp_m1_f32(f: number): string;
/**
* @param {number} f 
* @param {number} other 
* @returns {string} 
*/
export function hypot_f32(f: number, other: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function ln_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function ln_1p_f32(f: number): string;
/**
* @param {number} f 
* @param {number} base 
* @returns {string} 
*/
export function log_f32(f: number, base: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function log10_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function log2_f32(f: number): string;
/**
* @param {number} f 
* @param {number} n 
* @returns {string} 
*/
export function powf_f32(f: number, n: number): string;
/**
* @param {number} f 
* @param {number} n 
* @returns {string} 
*/
export function powi_f32(f: number, n: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function recip_f32(f: number): string;
/**
* @param {number} f 
* @param {number} rhs 
* @returns {string} 
*/
export function rem_euclid_f32(f: number, rhs: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function sin_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function sinh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function sqrt_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function tan_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function tanh_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function to_degrees_f32(f: number): string;
/**
* @param {number} f 
* @returns {string} 
*/
export function to_radians_f32(f: number): string;
/**
* @returns {string} 
*/
export function MIN_f32(): string;
/**
* @returns {string} 
*/
export function MAX_f32(): string;
/**
* @returns {string} 
*/
export function E_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_1_PI_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_2_PI_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_2_SQRT_PI_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_1_SQRT_2_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_PI_2_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_PI_3_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_PI_4_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_PI_6_f32(): string;
/**
* @returns {string} 
*/
export function FRAC_PI_8_f32(): string;
/**
* @returns {string} 
*/
export function LN_2_f32(): string;
/**
* @returns {string} 
*/
export function LN_10_f32(): string;
/**
* @returns {string} 
*/
export function LOG2_E_f32(): string;
/**
* @returns {string} 
*/
export function LOG10_E_f32(): string;
/**
* @returns {string} 
*/
export function LOG10_2_f32(): string;
/**
* @returns {string} 
*/
export function LOG2_10_f32(): string;
/**
* @returns {string} 
*/
export function PI_f32(): string;
/**
* @returns {string} 
*/
export function SQRT_2_f32(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly f64_as_f32: (a: number, b: number) => void;
  readonly str_as_f32: (a: number, b: number, c: number) => void;
  readonly add_f32: (a: number, b: number, c: number) => void;
  readonly sub_f32: (a: number, b: number, c: number) => void;
  readonly div_f32: (a: number, b: number, c: number) => void;
  readonly mul_f32: (a: number, b: number, c: number) => void;
  readonly rem_f32: (a: number, b: number, c: number) => void;
  readonly acos_f32: (a: number, b: number) => void;
  readonly acosh_f32: (a: number, b: number) => void;
  readonly asin_f32: (a: number, b: number) => void;
  readonly asinh_f32: (a: number, b: number) => void;
  readonly atan_f32: (a: number, b: number) => void;
  readonly atan2_f32: (a: number, b: number, c: number) => void;
  readonly atanh_f32: (a: number, b: number) => void;
  readonly cbrt_f32: (a: number, b: number) => void;
  readonly cos_f32: (a: number, b: number) => void;
  readonly cosh_f32: (a: number, b: number) => void;
  readonly exp_f32: (a: number, b: number) => void;
  readonly exp2_f32: (a: number, b: number) => void;
  readonly exp_m1_f32: (a: number, b: number) => void;
  readonly hypot_f32: (a: number, b: number, c: number) => void;
  readonly ln_f32: (a: number, b: number) => void;
  readonly ln_1p_f32: (a: number, b: number) => void;
  readonly log_f32: (a: number, b: number, c: number) => void;
  readonly log10_f32: (a: number, b: number) => void;
  readonly log2_f32: (a: number, b: number) => void;
  readonly powf_f32: (a: number, b: number, c: number) => void;
  readonly powi_f32: (a: number, b: number, c: number) => void;
  readonly recip_f32: (a: number, b: number) => void;
  readonly rem_euclid_f32: (a: number, b: number, c: number) => void;
  readonly sin_f32: (a: number, b: number) => void;
  readonly sinh_f32: (a: number, b: number) => void;
  readonly sqrt_f32: (a: number, b: number) => void;
  readonly tan_f32: (a: number, b: number) => void;
  readonly tanh_f32: (a: number, b: number) => void;
  readonly to_degrees_f32: (a: number, b: number) => void;
  readonly to_radians_f32: (a: number, b: number) => void;
  readonly MIN_f32: (a: number) => void;
  readonly MAX_f32: (a: number) => void;
  readonly E_f32: (a: number) => void;
  readonly FRAC_1_PI_f32: (a: number) => void;
  readonly FRAC_2_PI_f32: (a: number) => void;
  readonly FRAC_2_SQRT_PI_f32: (a: number) => void;
  readonly FRAC_1_SQRT_2_f32: (a: number) => void;
  readonly FRAC_PI_2_f32: (a: number) => void;
  readonly FRAC_PI_3_f32: (a: number) => void;
  readonly FRAC_PI_4_f32: (a: number) => void;
  readonly FRAC_PI_6_f32: (a: number) => void;
  readonly FRAC_PI_8_f32: (a: number) => void;
  readonly LN_2_f32: (a: number) => void;
  readonly LN_10_f32: (a: number) => void;
  readonly LOG2_E_f32: (a: number) => void;
  readonly LOG10_E_f32: (a: number) => void;
  readonly LOG10_2_f32: (a: number) => void;
  readonly LOG2_10_f32: (a: number) => void;
  readonly PI_f32: (a: number) => void;
  readonly SQRT_2_f32: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        