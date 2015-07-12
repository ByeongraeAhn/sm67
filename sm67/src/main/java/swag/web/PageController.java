package swag.web;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import swag.dao.ChatDao;
import swag.dao.SwagUserDao;
import swag.domain.ChatVo;
import swag.domain.SwagUserVo;


@Controller("/page")
@RequestMapping("/page")
public class PageController {
  
  @Autowired
  SwagUserDao swagUserDao;
  @Autowired
  ChatDao chatDao;
  
  @RequestMapping("/login")
  public Object list(String email, String name, String birthday, HttpSession session) throws Exception {
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();
    sqlParams.put("email", email);
    sqlParams.put("username", name);
    sqlParams.put("birthday", birthday);
    
    //기존의 등록된 유저인지 확인한다.
    SwagUserVo validation = swagUserDao.validationUser(email);
    
    //새로운 유저이면 유저정보를 등록한다.
    if(validation.getCount() == 1) {
    } else {
      swagUserDao.insert(sqlParams);
    }
    
    
    SwagUserVo swagUserVo = swagUserDao.selectOne(email);
    
    session.setAttribute("user", swagUserVo);
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("data", validation);
    
    
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "text/plain;charset=UTF-8");
    headers.add("Access-Control-Allow-Origin", "*");
    
    return responseData;
  }
  
  @RequestMapping("/loginOut")
  public Object list2(HttpSession session) throws Exception {
    session.invalidate();
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    
    return responseData;
  }
  
  @RequestMapping("/getSwagVo")
  public Object getSwagVo(HttpSession session) throws Exception {

    SwagUserVo swagUserVo = (SwagUserVo)session.getAttribute("user");
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("data", swagUserVo);

    
    return responseData;
  }
  
  @RequestMapping("/updateBirth")
  public Object updateBirth(HttpSession session, String birthday) throws Exception {

    SwagUserVo swagUserVo = (SwagUserVo)session.getAttribute("user");
    
    //생일정보를 업데이트하기 위해 해쉬맵에 세팅한다.
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();
    sqlParams.put("email", swagUserVo.getEmail());
    sqlParams.put("birthday", birthday);
    
    //생일정보를 업데이트한다.
    swagUserDao.update(sqlParams);
    
    //생일정보가 추가된 유저정보를 세션에 넣는다.
    swagUserVo = swagUserDao.selectOne(swagUserVo.getEmail());
    session.setAttribute("user", swagUserVo);
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");

    return responseData;
  }

  
  @RequestMapping("/chatCheck")
  public Object list(String inputString) throws Exception {
    
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    
    //DB에 저장되어 있는 inputString인지 검사한다.
    System.out.println("checkString 전");
    try{
    	
    	ChatVo chatStr = chatDao.validationString(inputString);
    	System.out.println(chatStr.getCount());
    	System.out.println(chatStr);
	    System.out.println("checkString 후");
	    HttpHeaders headers = new HttpHeaders();
	    headers.add("Content-Type", "text/plain;charset=UTF-8");
	    headers.add("Access-Control-Allow-Origin", "*");
	    
	    //DB에 저장이 되어 있지 않다면, outputString을 요청하고 
	    //    저장되어 있다면, 해당하는 outputString을 담아 리턴한다.
	    if(chatStr.getCount() >= 1) {
	    	//있다.
	    	System.out.println("check -- DB에 있네요.");
	    	System.out.println("inputString : " + inputString);
	    	chatStr = chatDao.getString(inputString);
	    	
	    	System.out.println("     getString 결과");
	    	System.out.println("inputString : " +chatStr.getInputString());
	    	System.out.println("outputString : " +chatStr.getOutputString());
	    	
	    	responseData.put("check", true);
	    	responseData.put("data", chatStr);
	    	return responseData;
	    } else {
	    	//없다.
	    	System.out.println("check -- DB에 없네요.");
	    	responseData.put("check", false);
	    	return responseData;
	    }
	    
//	    if(chatStr == null) {
//	    	responseData.put("check", false);
//	    	return responseData;
//	    } else {
//	    	responseData.put("check", true);
//	    	responseData.put("data", chatStr);
//	    	return responseData;
//	    }
	    
	    
    }catch(Exception e){
    	System.out.println("오류 발생!");
    	e.printStackTrace();
    }
	responseData.put("check", false);
	return responseData;
  }
  
  @RequestMapping("/insertString")
  public Object list(String inputString, String outputString) throws Exception {
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();
    sqlParams.put("inputString", inputString);
    sqlParams.put("outputString", outputString);
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    
    
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "text/plain;charset=UTF-8");
    headers.add("Access-Control-Allow-Origin", "*");
    try{
    	chatDao.insert(sqlParams);
    	
    } catch(Exception e){
    	e.printStackTrace();
    	System.out.println("insert 실패함.....");
    }
    return responseData;
    	
  }
  
}










