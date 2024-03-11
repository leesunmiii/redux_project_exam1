import {
    FETCH_FOOD_LIST,
    FETCH_FOOD_DETAIL,
    FETCH_PAGE,
    FETCH_RECIPE_LIST,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_COUNT,
    FETCH_RECIPE_PAGE,
    FETCH_RECIPE_POSTERS,
    FETCH_RECIPE_MAKES,
    FETCH_FIND_LIST, FETCH_FIND_PAGE
} from "./types";
import axios from "axios";

/*
                                 dispatch      dispatch
     component(React:View(jsp,html)) => action(함수) ==> Reducer(처리,갱신) ==> store(최종 결과값)
                                                                                |
                                                                               React에서 호출
     Front-End (MVC)
     1) react = JSP
     2) store = DispatcherServlet (데이터 송수신)
     3) action = @RequestMapping (사용자가 요청하는 내용에 대한 구분자)
     4) reducer == Model (데이터 관리 = 요청한 데이터 읽기.쓰기)
     5) state = request
          요청 (.do)
     JSP ========== DispatcherServlet ====> @RequestMapping(Model) ===> DAO ===> request
     React  ======   store  =====> action  =====> reducer ==== store
     React  ==>  이벤트 발생 ====> action({type,payload}) === reducer ==> store
     reducer에서 state갱신 ==> re-rendering ==> 화면 변경
     React(View) : 화면 출력  ==> View
     =======================================
     action : 요청을 받는다
     reducer : 요청 처리 => 데이터 갱신
                            ==> Model
     =======================================
     store : 처리된 데이터 저장
                            ==> Controller
     =======================================
     목적 : 분산 (여러명이 동시에 개발)
           유지 보수의 목적
           = 메소드 , 클래스
           = 퍼블리셔 : HTML,CSS (화면 제작)
           = Front-End : JavaScript
                         NodeJS / VueJS / Jquery / ReactJS / NextJS
           = Back-End : Database (Oracle,MySQL) / JSP / Java / Spring / Spring-Boot
           = Full-Stack : Front+Back

           @RequestMapping("list.do")
           public String list()
           {
              구현
           }
 */
export const fetchFoodList=(page)=>dispatch=>{
    axios.get('http://localhost/food/list_react',{
        params:{
            page:page
        }
        //                               foodReducer
    }).then((response)=>dispatch({
        type:FETCH_FOOD_LIST,
        payload:response.data
    }))
}
export const fetchPage=()=>dispatch=>{
    axios.get('http://localhost/food/food_totalpage_react')
        .then((response)=>dispatch({
            type:FETCH_PAGE,
            payload:response.data
        }))
}

export const fetchDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/food_detail_react',{
        params:{
            fno:fno
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
    }))
}
export const fetchRecipeList=(page)=>disptch=>{
    axios.get('http://localhost/recipe/list_react',{
        params:{
            page:page
        }

    }).then(response=>disptch({
        type:FETCH_RECIPE_LIST,
        payload:response.data
    }))
}
export const fetchRecipeCount=()=>dispatch=>{
    axios.get('http://localhost/recipe/count_react')
        .then(response=>dispatch({
            type:FETCH_RECIPE_COUNT,
            payload:response.data
        }))
}
export const fetchRecipePage=()=>dispatch=>{
    axios.get('http://localhost/recipe/page_react')
        .then(response=>dispatch({
            type:FETCH_RECIPE_PAGE,
            payload:response.data
        }))
}

export const fetchRecipeDetail=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_DETAIL,
        payload:response.data
    }))
}

export const fetchRecipePosters=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/image_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_POSTERS,
        payload:response.data
    }))
}

export const fetchRecipeMakes=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/make_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_MAKES,
        payload:response.data
    }))
}

export const fetchFindList=(page,fd)=>dispatch=>{
    axios.get('http://localhost/food/find_react',{
        params:{
            page:page,
            address:fd
        }
    }).then(response=>{
       const action={
           type:FETCH_FIND_LIST,
           payload:response.data
       }
        dispatch(action)
    })
}

export const fetchFindPage=(fd)=>dispatch=>{
    axios.get('http://localhost/food/find_totalpage_react',{
        params:{
            address:fd
        }
    }).then(response=>{
        const action={
            type:FETCH_FIND_PAGE,
            payload:response.data
        }
        //reduce로 전송
        dispatch(action)

    })
}
