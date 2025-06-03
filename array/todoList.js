// Ver.1 요구사항
// 1. 프로그램 시작 시 다음 메뉴를 출력한다:
//    [1. 일정 추가 2. 일정 삭제 3. 일정 전체 출력 0. 프로그램 종료]

// 2. 사용자는 아래 중 하나를 입력한다:
//    - "1" 또는 "일정 추가" : 새로운 일정을 입력받아 배열에 추가한다.
//    - "2" 또는 "일정 삭제" : 현재 일정을 보여주고, 입력한 일정 텍스트가 배열에 있다면 삭제한다.
//    - "3" 또는 "일정 전체 출력" : 현재 배열에 저장된 일정을 모두 출력한다.
//    - "0" 또는 "프로그램 종료" : 프로그램을 종료한다.

// 3. 위 외의 입력이 들어오면 "정확한 명령어를 입력하세요!" 라고 경고한다.

// Ver.2 요구사항 - 일정 수정 기능 추가
//    - "4" 또는 "일정 수정" : 현재 목록에서 수정하고 싶은 일정 텍스트를 입력받아, 새 내용으로 바꾼다.

let toDoList = [];

let initialPut = ['1', '일정 추가', '2', '일정 삭제', '3', '일정 전체 출력', '4', '일정 수정', '0', '프로그램 종료'];

while (true) {

    let userWant = prompt(`할 일을 입력하세요!\n1. 일정 추가\n2. 일정 삭제\n3. 일정 전체 출력\n4. 일정 수정\n0. 프로그램 종료`)

    if (initialPut.includes(userWant)) {
        if (userWant === '1' || userWant === '일정 추가') {
            let toDo = prompt(`일정을 추가하세요!`)
            toDoList.push(toDo);
        }

        if (userWant === '2' || userWant === '일정 삭제') {
            if (toDoList.length !== 0) {
                let toDelete = prompt(`${toDoList} 삭제하길 원하는 일정을 입력하세요!`)
                if (toDoList.includes(toDelete)) {
                    toDoList.splice(toDoList.indexOf(toDelete), 1);
                    alert(`일정 전체:${toDoList}`)
                } else {
                    alert(`삭제하길 원하는 일정을 정확히 입력하세요.`)
                }
            } else {
                alert("현재 저장된 일정이 없습니다!");
            }
        }

        if (userWant === '3' || userWant === '일정 전체 출력') {
            if (toDoList.length !== 0) {
                alert(`일정 전체:${toDoList}`)
            } else {
                alert("현재 저장된 일정이 없습니다!");
            }
        }

        if (userWant === '4' || userWant === '일정 수정') {
            if (toDoList.length !== 0) {
                let toReplace = prompt(`${toDoList} 수정하길 원하는 일정을 입력하세요!`)
                let toChange = prompt(`변경된 일정을 입력하세요!`)
                if (toDoList.includes(toReplace)) {
                    toDoList.splice(toDoList.indexOf(toReplace), 1, toChange);
                    alert(`일정 전체:${toDoList}`)
                } else {
                    alert(`수정하길 원하는 일정을 정확히 입력하세요.`)
                }
            } else {
                alert("현재 저장된 일정이 없습니다!");
            }
        }

        if (userWant === '0' || userWant === '프로그램 종료') {
            alert(`프로그램을 종료합니다!`);
            break;
        }
    }
    else {
        alert(`정확한 숫자(0~3) 또는 정확한 할 일을 입력하세요!`)
    }
}

