package swag.web;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import swag.dao.SwagUserDao;
import swag.domain.SwagUserVo;

import com.google.gson.Gson;

/* 실습 목표: JSON 데이터 출력 */

@Controller("/page")
@RequestMapping("/page")
public class PageController {
  
  @Autowired
  SwagUserDao swagUserDao;
  
  @RequestMapping("/login")
  public Object list(String email, String name, HttpSession session) throws Exception {
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();
    sqlParams.put("email", email);
    sqlParams.put("username", name);
    
    SwagUserVo validation = swagUserDao.validationUser(email);
    
    if(validation.getCount() == 1) {
      System.out.println("이미 등록되어있음");
    } else {
      swagUserDao.insert(sqlParams);
    }
    
    SwagUserVo swagUserVo = swagUserDao.selectOne(email);
    
    session.setAttribute("user", swagUserVo);
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("data", swagUserVo);
    
    
    return responseData;
  }
  
  @RequestMapping("/loginOut")
  public Object list2(HttpSession session) throws Exception {
    System.out.println("로그아웃 컨트롤러 들어옴22");

    session.invalidate();
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    
    return responseData;
  }

}










