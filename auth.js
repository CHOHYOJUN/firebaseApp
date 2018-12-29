import firebase from 'firebase'

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ firebase 초기화  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 프로젝트 이름 -> FireBaseTest
var config = {
  apiKey: "AIzaSyDXs-mSmX5wYuRoVQ9j6AtcT0LJmTI4zyE",
  authDomain: "fir-test-941f5.firebaseapp.com",
  databaseURL: "https://fir-test-941f5.firebaseio.com",
  projectId: "fir-test-941f5",
  storageBucket: "fir-test-941f5.appspot.com",
  messagingSenderId: "224585525403"
};

  firebase.initializeApp(config);