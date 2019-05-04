import React, { Component } from "react";

const insertPostApi = 'http://192.168.43.252:9090/insertPost'
const getPostApi = ''

// All body can be taken from postman
export default class AjaxResponse {
	static postData = (data) => {
		console.log("you're in postData AjaxResponse")
		console.log(data)
		return fetch(insertPostApi, data)
		.then(res => {
			if (res.status == 200)
				return res.json();
			else
				console.log('something needs to be done here for different status code');
		} )
		.catch(error => console.error('Getting Error for fetch function', error));
	}
}