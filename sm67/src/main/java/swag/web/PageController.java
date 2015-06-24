package swag.web;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
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
    birthday="20100101";
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
  
  @RequestMapping("/getBirth")
  public Object getBirth(HttpSession session) throws Exception {
    
    SwagUserVo swagUserVo = (SwagUserVo)session.getAttribute("user");
    
    SwagUserVo birthvalidation = null;
    String day = null;
    //생일정보가 있는지 확인한다
    try {
      birthvalidation = swagUserDao.birthdayValidationUser(swagUserVo.getEmail()); 
      Date aa = birthvalidation.getBirthday();
      DateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd");
      day = sdFormat.format(aa);
    } catch (Exception ex) {
      day = null;
    }
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("birthday", day);
    
    
    return responseData;
  }

}










