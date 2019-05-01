let request = require('request');
let fs = require('fs');

function post(url, requestBody){
	return new Promise(function(resolve, reject){
		let options = {
			url: url,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf8',
			},
			json: true,
			timeout: 10000,
			body: requestBody
		}
		request(options, function(err, res, body){
			if(err){
				reject(err);
			}else{
				resolve(body);
			}
		});	
	});
}
function postUrlEncoded(url, form){
	return new Promise(function(resolve, reject){
		let options = {
			url: url,
			method: 'POST',
			headers: { 
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
			form: form,
			json: true,
			timeout: 10000,
		}
		request(options, function(err, res, body){
			if(err){
				reject(err);	
			}else{
				resolve(body);
			}
		});	
	});
}
function get(url, params){

	return new Promise(function(resolve, reject){
		let options = {
			url: url,
			method: 'GET',
			qs: params,
			headers: { 
				'Content-Type': 'application/json; charset=utf-8',
			},
			json: true,
			timeout: 10000
		}
		request(options, function(err, res, body){
			if(err){
				reject(err);	
			}else{
				resolve(body);
			}
		});	
	});
}
//json数据有长整形属性时使用， 数据返回到业务中处理
function getText(url, params) {
	return new Promise(function(resolve, reject){
		let options = {
			url: url,
			method: 'GET',
			qs: params,
			headers: { 
				'Content-Type': 'application/json; charset=utf-8',
			},
			timeout: 10000
		}
		request(options, function(err, res, body){
			if(err){
				reject(err);	
			}else{
				resolve(body);
			}
		});	
	});
}
//上传文件
function uploadFile(url, params, dir='') {
	let formData = {
		file: { 
			value: fs.createReadStream(params.path),
      options: { 
      	filename: params.name
      }
    },
    dir: dir
	}
	return new Promise(function(resolve, reject){
		let options = {
			url: url,
			method: 'post',
			formData: formData,
			headers: { 
				'Content-Type': 'content-type: multipart/form-data',
			},
			json: true
		}
		request(options, function(err, res, body){
			if(err){
				reject(err);	
			}else{
				resolve(body);
			}
		});	
	});
}
//获取远程文件内容
function getFileContent(url){

	return new Promise(function(resolve, reject){
		request(url, function(err, res, body){
			console.log(err);
			if(err){
				resolve();	
			}else{
				resolve(body);
			}
		});	
	});
}

exports = module.exports = {
	postUrlEncoded: postUrlEncoded,
	post: post,
	get: get,
	getText: getText,
	uploadFile: uploadFile,
	getFileContent: getFileContent
}