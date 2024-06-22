// express 기본 모듈 불러오기
var express = require('express'), http = require('http'), path=require('path');
// express 미들웨어 불러오기
var static = require('serve-static');
// express 객체 생성
var app = express();
var router = express.Router();
//기본 속성 설정
app.set('port', process.env.PORT||8080);
app.set('host', '0.0.0.0');//127.0.0.1
//static 서버 미들웨어 사용
app.use(static(__dirname));

app.use(express.urlencoded());
app.use(express.json());
//createserver하기 바로 직전에 만드는 게 좋음
app.all('*', function(req,res){
	res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});
// express 서버 시작
http.createServer(app).listen(app.get('port'), app.get('host'), () => {
	console.log('Express server running at' + app.get('port') + app.get('host'));
});