"use strict"

// 트레저랑 밑에 버튼 가운제 정렬좀여 ㅋㅋ
// 부트스트랩을 안써서 충될할거같은데 잠시만
// 엡 전 이제 됬씁니
// 모달에 입력하고 엔터치면 자동으로 사라지는데용?
// 인풋창 안보이게 적용이요.. ㅎㅎ
function rfidEnd() {
    const r = document.getElementById('myInput');
    console.log(r.value);
    r.value = '';


    const m = document.getElementById('staticBackdrop');
    var myModal = bootstrap.Modal.getInstance(m);
    myModal.hide();
}

var myModal = document.getElementById('staticBackdrop')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function() {
    // myInput.focus()
})

function fullOn(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
        console.log(1);
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(); // 실제 걸리는 함수
        console.log(2);
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        console.log(3);
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // IE
        console.log(4);
    }
}

// 사람이 직접 눌러야하는군용 ㅋㅋ
// 저건 어쩔수 없나봐요, 구글링 해도 안나와요 ㅋㅋ
// 이 이슈는 중요하지 않으니 넘어가시죠
// 아마 컴터 종료 스케줄 잡아놓으면 브라우져도 같이 꺼질테니
// 큰문제 없을거에용..
// 그것보다, 운영 도중에 전체화면을 해제할 일이 있을수 있다는 건데..
// 이것때문에 f11 키로 전체화면 하는것보다, 히든터치로 구현하는게 좋을거 같아용
// 아 그 방법이 제일 낫겠네용 ㅋㅋㅋ// 네넹 염두해 주세용 ㅎㅋㅋ

const fullOff = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE
    }
}


document.querySelector('button[fOn]').addEventListener('click',
    (e) => {
        const element = document.querySelector("div[canvas]");
        // 엘리먼트로 body 를 잡으면 백그라운드 색상이 검정색으로만 됨
        // css 로 body 색상 적용 안됨
        fullOn(element);

    });
document.querySelector('button[fOff]').addEventListener('click',
    (e) => {
        fullOff();
    });

///////////////////////////////////////////////////////////////////

// divModal 왜안되지..됬슴비당~~ 넹 ㅎㅎ
// 페이지 열리면 바로 전체화면 시켜버리세용
// 아 그거 오늘 한참 찾았는데 안되더라구여ㅛ ㅋ
// document loading 완료 감지 이벤트 찾아서 하심돼용 일단 요거할게여 ㅋㅋㅋ
// 넹 안그래도 저거 물어볼라 했어요.
// 온로드 머시기로 전체화면 할려고 하는데
// 언제가부터 직접 이벤트 없이는 에러 난다고 하드라구영 ㅎㅎ
// 아 하긴 그럴만 할거같아요 ㅋㅋㅋㅋ

// dev
const log = console.log

function main() {
    // elems
    const btnOpenReader = document.querySelector("button[open-reader-btn]")
    const divModal = document.querySelector("div[id='staticBackdrop']")
    const divModalBody = document.querySelector("div[modal-body]")
    const divOutput = document.querySelector("div[output]")
    // 피ㄹ립씨 혹시 엔터가 안들어와서 그런가요?
    // 아뇨 엘리먼트 속성에 입력값 저장할려yo
    btnOpenReader.addEventListener("click", () => {
        divModalBody.setAttribute("rfid", "")
    })
    divModal.addEventListener("blur", () => {
        divModalBody.removeAttribute("rfid")
    })
    divModal.addEventListener("keydown", (evt) => {
        const rfid = divModalBody.getAttribute("rfid")
        if (evt.code == "Enter") {
            divOutput.innerText = rfid
            bootstrap.Modal.getInstance(divModal).hide();
            return
        }
        divModalBody.setAttribute("rfid", rfid + evt.key)
    })
} // ddhdh오오옹올 끝인가요?
// 넹 이 로직으로 하면 될거같아여
// 태블릿으로 해볼게 //잘되네요 ㅎㅎㅎㅎ
// 수고했음당. ㅋㅋ
// 글고 전체화면이 자동으로 되면 좋은데
// 오토키로 할수는 있는데
// 해제가 안되네요
// 함 봐보세용
// 그냥 윈도우 이벤트로  F12 || ESC || 컨트롤+F 등등 키 입력 받으면 거절하면돼??
// 전체 화면은 가능한데 해제가 안되서요
// 특정 단축키를 만들어서 그거 누르면 해제 되게 하면 되죵
// 아아아 // 그 태블릿이 매립이구, 겉으로는 키보드가 안나와있어서 키 입력은 못해용.. 아..ㅋㅋㅋㅋ 아무튼 함 보세요 ㅋㅋ
// 브라우저에서 f11 로 전체화면 하면 자바스크립트 함수로 해제가 안되/ 요게 해결 되나요?/
// 키입력이 제 컴터에 들어가네여 ㅋㅋ

// 어차피 기계 세팅은 사람이 하니깐 프로그램 켠 사람이 전체화면 하면 되는거구
// 남들은 못푸는데  저만 풀면 되는거에여?
// 네넹 맞아요. 이거 이슈는 중요한건 아니에용..
// 저 풀스크린 함수는 어디있어요?
// 저 버튼만 만들어놓고  전체화면 하면 풀스크린버튼 없애버리거나
// 전체기계 해제하는것처럼 어드민 페이지에서 방송때려서 전체화면 만들면 되졍
// F11말고 저 함수로 처리해도 전체화면 되자나용
// 저 함수가 스크립트 이벤트로 작동이 안되용..
// 어제 말씀드린것처럼 특정 위치에 터치 3 번을 빠르게(예를 들어)
// 이런식으로 전체화면 하고 풀고 구현 해놓구
// 현장 가이드 한테 전달하면 되는데, ,
// 그러면 되긴한데 최대한 관리를 적게 해주는게 좋아요..
// 이거 이슈만 해결되면 자동으로 윈도우 켯따 껐다까지 스케줄 잡아놓으면
// 관리 하할게 없어지니용..
// 관리자가 특정페이지에 들어가서 전체화면풀기 버튼 누르면
// 소켓으로 방송때려서 전체 기계 전체화면 끄면 되 // 무슨 말이져?
// 다른 컴퓨터에서 접속 해서 컨트롤 하나요 ?
//
//     어차피 오토콜때문에 인터넷 연결해야하니깐
// 브라우저 접속을 외부 서버에 띄워서 할테니깐
// https: //example.com/admin  같은 페이지 만들어서
//     이 페이지에는 "전체기계 전체화면 종료"
// 버튼같은거 만들어서
// 이거 누르면 소켓으로 전체 방송 날려서
// 현재 전체화면중인 기계들 전체화면 끄면
// 기계에서 물리적으로 뭘 누르지 않고 끌수있졍
// 근데
main()

// const divCloseFS = document.querySelector("div[cancel-full-screen]")
// let touch = 0
// divCloseFS.addEventListener("click", () => {
//     log(touch)
//     if (touch == 3) {
//         fullOff()
//         touch = 0
//         return
//     }
//     touch++
// })