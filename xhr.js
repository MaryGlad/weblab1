let token = null;

function sendRequest(method, url, body = null) {
	  return new Promise((resolve, reject) => {
	    const xhr = new XMLHttpRequest();

	    xhr.open(method, url);

	    xhr.responseType = "json";

	    xhr.setRequestHeader("Content-Type", "application/json");
	    xhr.setRequestHeader("Accept", "application/json");
	    xhr.setRequestHeader("x-access-tokens", token);

	    xhr.onload = () => {
	      if (xhr.status >= 400) {
	        reject(xhr.response);
	      } else {
	        resolve(xhr.response);
	      }
	    };

	    xhr.onerror = () => {
	      reject(xhr.response);
	    };

	    xhr.send(JSON.stringify(body));
	  });
}

let userId = 1;
let creditId = 1;

const register = 'http://127.0.0.1:5000/user';
const logn = 'http://127.0.0.1:5000//user/lordr3s';
const Credit = 'http://127.0.0.1:5000/product';
const UserCredit = 'http://127.0.0.1:5000/product';
const User = 'http://127.0.0.1:5000/user';

const user = {
	username: "oleksiy",
	password: "1234567890",
	clientName: "vstoleksiy",
	firstName: "Oleksiy",
	lastName: "Vasiuta",
};

const userupd = {
	username: "",
	password: "",
	clientName: "vstoleksiy@gmail.com",
	firstName: "Oleksii",
	lastName: "Vasiuta",
}

const loguser = {
	username: "lordr3s",
	password: "1111"
};

const product = {
	  id: "3",
	  name: "Apple",
	  status: "available",
}

const creditupd = {
	id: "1",
	name: "Mario",
	status: "unavailable",
}

	const order = {
	  user_id: 1,
	  product_id: 3
	}

	sendRequest("POST", register, user)
	  .then((data) => console.log(data))
	  .catch((err) => console.log(err));

	sendRequest("POST", logn, loguser)
	    .then((data) => {
	      token = data.token.slice(2, -1);
	      console.log(data)})
	    .catch((err) => console.log(err));

	setTimeout(() => {
	  sendRequest("POST", Credit, product)
	    .then((data) => {
	      console.log(data);
	    })
	    .catch((err) => console.log(err));
	}, 1000);

	setTimeout(() => {
	  sendRequest("GET", Credit)
	    .then((data) => {
	      console.log(data);
	    })
	    .catch((err) => console.log(err));
	}, 1000);

	setTimeout(() => {
	  sendRequest("POST", UserCredit + '/' + creditId + '/' + userId, order)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("GET", UserCredit)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("DELETE", UserCredit + '/' + creditId + '/' + userId)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("PUT", Credit + '/' + creditId, creditupd)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("DELETE", Credit + '/' + creditId)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("GET", User)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);

	setTimeout(() => {
	  sendRequest("PUT", User, userupd)
	    .then((data) => console.log(data))
	    .catch((err) => console.log(err))
	}, 2000);