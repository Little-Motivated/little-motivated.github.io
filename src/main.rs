use actix_web::{web, App, HttpServer, HttpResponse};

async fn hello() -> HttpResponse {
    HttpResponse::Ok().body("First!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().route("/", web::get().to(hello))
    })
    .bind("192.168.0.16:18318")? // Позволяет доступ извне
    .run()
    .await
}
