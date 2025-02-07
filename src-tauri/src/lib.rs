// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![compute_julia])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

pub struct JuliaParams {
    pub c_real: f64,
    pub c_imag: f64,
    pub x_min: f64,
    pub x_max: f64,
    pub y_min: f64,
    pub y_max: f64,
    pub height: usize,
    pub width: usize,
    pub max_iter: f64,
}

#[tauri::command]
fn compute_julia(params: JuliaParams) -> Vec<u8> {
    let mut result: Vec<u8> = Vec::with_capacity(params.width * params.height);

    for y in 0..params.height {
        for x in 0..params.width {
            let zx =
                params.x_min + (x as f64) * (params.x_max - params.x_min) / (params.width as f64);
            let zy =
                params.y_min + (x as f64) * (params.y_max - params.y_min) / (params.height as f64);

            let (mut zx_, mut zy_) = (zx, zy);
            let mut iter: f64 = 0.;

            while iter < params.max_iter && (zx_ * zx_ + zy_ * zy_) < 4.0 {
                let tmp = zx_ * zx_ - zy_ * zy_ + params.c_real;
                zy_ = 2.0 * zx_ * zy_ + params.c_imag;
                zx_ = tmp;
                iter += 1.;
            }

            result.push(iter as u8);
        }
    }

    result
}
