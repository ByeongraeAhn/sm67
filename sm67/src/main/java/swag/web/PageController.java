package swag.web;

import java.sql.Date;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import swag.dao.SwagUserDao;
import swag.domain.SwagUserVo;


@Controller("/page")
@RequestMapping("/page")
public class PageController {
  
  @Autowired
  SwagUserDao swagUserDao;
  
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

}










