#![allow(non_snake_case)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

fn _f64_as_f32(f: f64) -> f32 {
    f as f32
}

fn _str_as_f32(s: &str) -> f32 {
    s.parse::<f32>().unwrap()
}

#[wasm_bindgen]
pub fn f64_as_f32(f: f64) -> String {
    _f64_as_f32(f).to_string()
}

#[wasm_bindgen]
pub fn str_as_f32(s: &str) -> String {
    _str_as_f32(s).to_string()
}


#[wasm_bindgen]
pub fn add_f32(a: f64, b: f64) -> String {
    (_f64_as_f32(a) + _f64_as_f32(b)).to_string()
}

#[wasm_bindgen]
pub fn sub_f32(a: f64, b: f64) -> String {
    (_f64_as_f32(a) - _f64_as_f32(b)).to_string()
}

#[wasm_bindgen]
pub fn div_f32(a: f64, b: f64) -> String {
    (_f64_as_f32(a) / _f64_as_f32(b)).to_string()
}

#[wasm_bindgen]
pub fn mul_f32(a: f64, b: f64) -> String {
    (_f64_as_f32(a) * _f64_as_f32(b)).to_string()
}

#[wasm_bindgen]
pub fn rem_f32(a: f64, b: f64) -> String {
    (_f64_as_f32(a) % _f64_as_f32(b)).to_string()
}


#[wasm_bindgen]
pub fn acos_f32(f: f64) -> String {
    _f64_as_f32(f).acos().to_string()
}

#[wasm_bindgen]
pub fn acosh_f32(f: f64) -> String {
    _f64_as_f32(f).acosh().to_string()
}

#[wasm_bindgen]
pub fn asin_f32(f: f64) -> String {
    _f64_as_f32(f).asin().to_string()
}

#[wasm_bindgen]
pub fn asinh_f32(f: f64) -> String {
    _f64_as_f32(f).asinh().to_string()
}

#[wasm_bindgen]
pub fn atan_f32(f: f64) -> String {
    _f64_as_f32(f).atan().to_string()
}

#[wasm_bindgen]
pub fn atan2_f32(f: f64, other: f64) -> String {
    _f64_as_f32(f).atan2(_f64_as_f32(other)).to_string()
}

#[wasm_bindgen]
pub fn atanh_f32(f: f64) -> String {
    _f64_as_f32(f).atanh().to_string()
}

#[wasm_bindgen]
pub fn cbrt_f32(f: f64) -> String {
    _f64_as_f32(f).cbrt().to_string()
}

#[wasm_bindgen]
pub fn cos_f32(f: f64) -> String {
    _f64_as_f32(f).cos().to_string()
}

#[wasm_bindgen]
pub fn cosh_f32(f: f64) -> String {
    _f64_as_f32(f).cosh().to_string()
}

#[wasm_bindgen]
pub fn exp_f32(f: f64) -> String {
    _f64_as_f32(f).exp().to_string()
}

#[wasm_bindgen]
pub fn exp2_f32(f: f64) -> String {
    _f64_as_f32(f).exp2().to_string()
}

#[wasm_bindgen]
pub fn exp_m1_f32(f: f64) -> String {
    _f64_as_f32(f).exp_m1().to_string()
}

#[wasm_bindgen]
pub fn hypot_f32(f: f64, other: f64) -> String {
    _f64_as_f32(f).hypot(_f64_as_f32(other)).to_string()
}

#[wasm_bindgen]
pub fn ln_f32(f: f64) -> String {
    _f64_as_f32(f).ln().to_string()
}

#[wasm_bindgen]
pub fn ln_1p_f32(f: f64) -> String {
    _f64_as_f32(f).ln_1p().to_string()
}

#[wasm_bindgen]
pub fn log_f32(f: f64, base: f64) -> String {
    _f64_as_f32(f).log(_f64_as_f32(base)).to_string()
}

#[wasm_bindgen]
pub fn log10_f32(f: f64) -> String {
    _f64_as_f32(f).log10().to_string()
}

#[wasm_bindgen]
pub fn log2_f32(f: f64) -> String {
    _f64_as_f32(f).log2().to_string()
}

#[wasm_bindgen]
pub fn powf_f32(f: f64, n: f64) -> String {
    _f64_as_f32(f).powf(_f64_as_f32(n)).to_string()
}

#[wasm_bindgen]
pub fn powi_f32(f: f64, n: i32) -> String {
    _f64_as_f32(f).powi(n).to_string()
}

#[wasm_bindgen]
pub fn recip_f32(f: f64) -> String {
    _f64_as_f32(f).recip().to_string()
}

#[wasm_bindgen]
pub fn rem_euclid_f32(f: f64, rhs: f64) -> String {
    _f64_as_f32(f).rem_euclid(_f64_as_f32(rhs)).to_string()
}

#[wasm_bindgen]
pub fn sin_f32(f: f64) -> String {
    _f64_as_f32(f).sin().to_string()
}

#[wasm_bindgen]
pub fn sinh_f32(f: f64) -> String {
    _f64_as_f32(f).sinh().to_string()
}

#[wasm_bindgen]
pub fn sqrt_f32(f: f64) -> String {
    _f64_as_f32(f).sqrt().to_string()
}

#[wasm_bindgen]
pub fn tan_f32(f: f64) -> String {
    _f64_as_f32(f).tan().to_string()
}

#[wasm_bindgen]
pub fn tanh_f32(f: f64) -> String {
    _f64_as_f32(f).tanh().to_string()
}

#[wasm_bindgen]
pub fn to_degrees_f32(f: f64) -> String {
    _f64_as_f32(f).to_degrees().to_string()
}

#[wasm_bindgen]
pub fn to_radians_f32(f: f64) -> String {
    _f64_as_f32(f).to_radians().to_string()
}


#[wasm_bindgen]
pub fn MIN_f32() -> String {
    f32::MIN.to_string()
}

#[wasm_bindgen]
pub fn MAX_f32() -> String {
    f32::MAX.to_string()
}


#[wasm_bindgen]
pub fn E_f32() -> String {
    std::f32::consts::E.to_string()
}

#[wasm_bindgen]
pub fn FRAC_1_PI_f32() -> String {
    std::f32::consts::FRAC_1_PI.to_string()
}

#[wasm_bindgen]
pub fn FRAC_2_PI_f32() -> String {
    std::f32::consts::FRAC_2_PI.to_string()
}

#[wasm_bindgen]
pub fn FRAC_2_SQRT_PI_f32() -> String {
    std::f32::consts::FRAC_2_SQRT_PI.to_string()
}

#[wasm_bindgen]
pub fn FRAC_1_SQRT_2_f32() -> String {
    std::f32::consts::FRAC_1_SQRT_2.to_string()
}

#[wasm_bindgen]
pub fn FRAC_PI_2_f32() -> String {
    std::f32::consts::FRAC_PI_2.to_string()
}

#[wasm_bindgen]
pub fn FRAC_PI_3_f32() -> String {
    std::f32::consts::FRAC_PI_3.to_string()
}

#[wasm_bindgen]
pub fn FRAC_PI_4_f32() -> String {
    std::f32::consts::FRAC_PI_4.to_string()
}

#[wasm_bindgen]
pub fn FRAC_PI_6_f32() -> String {
    std::f32::consts::FRAC_PI_6.to_string()
}

#[wasm_bindgen]
pub fn FRAC_PI_8_f32() -> String {
    std::f32::consts::FRAC_PI_8.to_string()
}

#[wasm_bindgen]
pub fn LN_2_f32() -> String {
    std::f32::consts::LN_2.to_string()
}

#[wasm_bindgen]
pub fn LN_10_f32() -> String {
    std::f32::consts::LN_10.to_string()
}

#[wasm_bindgen]
pub fn LOG2_E_f32() -> String {
    std::f32::consts::LOG2_E.to_string()
}

#[wasm_bindgen]
pub fn LOG10_E_f32() -> String {
    std::f32::consts::LOG10_E.to_string()
}

#[wasm_bindgen]
pub fn LOG10_2_f32() -> String {
    std::f32::consts::LOG10_2.to_string()
}

#[wasm_bindgen]
pub fn LOG2_10_f32() -> String {
    std::f32::consts::LOG2_10.to_string()
}

#[wasm_bindgen]
pub fn PI_f32() -> String {
    std::f32::consts::PI.to_string()
}

#[wasm_bindgen]
pub fn SQRT_2_f32() -> String {
    std::f32::consts::SQRT_2.to_string()
}
