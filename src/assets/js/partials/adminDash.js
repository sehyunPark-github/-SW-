/*[
    {
        "_id": "61aea62942216cb213c78ee4",
        "name": "1111hj",
        "email": "010-1111-1111",
        "phoneNumber": "010-1111-1111",
        "peopleNum": 2,
        "message": "",
        "program": "61acb3664b69a917dc1fab4a",
        "reservationCode": "010-1111-111116388357530701111",
        "userId": {
            "_id": "61ae06869b92e5555859273a",
            "username": "1111hj",
            "realname": "이름",
            "email": "10rlatkdtn@kau.kr",
            "phoneNumber": "010-1111-1111",
            "createdAt": "2021-12-06 21:44",
            "isAdmin": false,
            "programList": [
                "61acb37b4b69a917dc1fab4e",
                "61acb3664b69a917dc1fab4a"
            ],
            "reserveList": [
                "61ae06a69b92e55558592750",
                "61aea62942216cb213c78ee4"
            ],
            "__v": 2
        },
        "__v": 0
    },
    {
        "_id": "61aea5ec42216cb213c78ecb",
        "name": "홍길동",
        "email": "10rlatkdtn@naver.com",
        "phoneNumber": "010-2222-2222",
        "peopleNum": 1,
        "message": "",
        "program": "61acb3664b69a917dc1fab4a",
        "reservationCode": "10rlatkdtn16388356924342222",
        "__v": 0
    },
    {
        "_id": "61ae06a69b92e55558592750",
        "name": "1111hj",
        "email": "010-1111-1111",
        "phoneNumber": "010-1111-1111",
        "peopleNum": 2,
        "message": "",
        "program": "61acb37b4b69a917dc1fab4e",
        "reservationCode": "010-1111-111116387949180451111",
        "userId": {
            "_id": "61ae06869b92e5555859273a",
            "username": "1111hj",
            "realname": "이름",
            "email": "10rlatkdtn@kau.kr",
            "phoneNumber": "010-1111-1111",
            "createdAt": "2021-12-06 21:44",
            "isAdmin": false,
            "programList": [
                "61acb37b4b69a917dc1fab4e",
                "61acb3664b69a917dc1fab4a"
            ],
            "reserveList": [
                "61ae06a69b92e55558592750",
                "61aea62942216cb213c78ee4"
            ],
            "__v": 2
        },
        "__v": 0
    },
    {
        "_id": "61adec3152c59c82cd7d1b46",
        "name": "김현진",
        "email": "0803hj@naver",
        "phoneNumber": "010-1222-1111",
        "peopleNum": 1,
        "message": "",
        "program": "61acab9f1016ada7676d0677",
        "reservationCode": "0803hj16387881451521111",
        "__v": 0
    },
    {
        "_id": "61ace34e072cfb232c96538d",
        "name": "정민석",
        "email": "skss@gmail.com",
        "phoneNumber": "01082933060",
        "peopleNum": 5,
        "message": "아아아",
        "program": "61acab9f1016ada7676d0677",
        "reservationCode": "skss16387203346123060",
        "__v": 0
    },
    {
        "_id": "61acc33f0e0dad85528def11",
        "name": "정민석",
        "email": "minseok.jeong.james@gmail.com",
        "phoneNumber": "01082933060",
        "peopleNum": 5,
        "message": "asdfasdf",
        "program": "61acb3664b69a917dc1fab4a",
        "reservationCode": "minseok.jeong.james16387121271803060",
        "__v": 0
    },
    {
        "_id": "61ac91a8022113a3e486fe14",
        "name": "정민석",
        "email": "minseok@gmail.com",
        "phoneNumber": "01082933060",
        "peopleNum": 3,
        "message": "2323",
        "program": "61ac90cc022113a3e486fd75",
        "reservationCode": "minseok16386994324693060",
        "__v": 0
    },
    {
        "_id": "61ac9167022113a3e486fe00",
        "name": "james",
        "email": "01082933060",
        "phoneNumber": "01082933060",
        "peopleNum": 3,
        "message": "옝약",
        "program": "61ac90d3022113a3e486fd85",
        "reservationCode": "0108293306016386993679053060",
        "userId": {
            "_id": "61ac915d022113a3e486fded",
            "username": "james",
            "realname": "정민석",
            "email": "alstjr3060@kau.kr",
            "phoneNumber": "01082933060",
            "createdAt": "2021-12-05 19:07",
            "isAdmin": false,
            "programList": [
                "61ac90d3022113a3e486fd85"
            ],
            "reserveList": [
                "61ac9167022113a3e486fe00"
            ],
            "__v": 1
        },
        "__v": 0
    }
]
*/

const reservationsInputHidden = document.getElementById("reservationsData")
if(reservationsInputHidden){
    const reservationData=JSON.parse(reservationsInputHidden.value)
    console.log("reservationData : ",reservationData)
    
    const body = document.querySelector('.main'); //전체 바디
    const reservationListContainer = document.createElement('div'); //예약정보 전체 묶는 컨테이너
    reservationListContainer.classList.add('reservationListContainer'); //컨테이너의css
    
    function createReservationList(obj) { //객체 받아오기
        
        for (key in obj) { //객체에서 키값 꺼내기
            console.log("key : ", key)
            const reservation = document.createElement('div'); //예약정보 하나 묶는 컨테이너
            reservation.classList.add('reservation'); //해당 css
            
            const reservationInfo = document.createElement('div');
            reservationInfo.classList.add('reservationInfo');
            reservationInfo.innerHTML = "성함: " + obj[key].name;
            reservationInfo.innerHTML = "프로그램명: " + obj[key].program;
            reservationInfo.innerHTML = "이메일: " + obj[key].email;
            reservationInfo.innerHTML = "아이디: " + obj[key]._id;
            reservationInfo.innerHTML = "전화번호: " + obj[key].phoneNumber;
            reservationInfo.innerHTML = "인원수: " + obj[key]._id;
            reservationInfo.innerHTML = "문의사항: " + obj[key].message;
            
           
            reservation.appendChild(reservationInfo);
            reservationListContainer.appendChild(reservation);
            
        }
    }
    createReservationList(reservationData);
    body.appendChild(reservationListContainer);
}
