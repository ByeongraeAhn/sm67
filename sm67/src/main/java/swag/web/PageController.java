package swag.web;

import java.util.HashMap;

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
  public ResponseEntity<String> list(String email, String name) throws Exception {
    
    HashMap<String,Object> sqlParams = new HashMap<String,Object>();
    sqlParams.put("email", email);
    sqlParams.put("username", name);
    
    SwagUserVo swagUserVo = swagUserDao.selectOne(email);
    
    if(swagUserVo.getCount() == 1) {
      System.out.println("이미 등록되어있음");
    } else {
      swagUserDao.insert(sqlParams);
    }
    
    HashMap<String,Object> responseData = new HashMap<String,Object>();
    responseData.put("status", "success");
    responseData.put("email", email);
    responseData.put("username", name);
    
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "text/plain;charset=UTF-8");
    headers.add("Access-Control-Allow-Origin", "*");
    
    return new ResponseEntity<String>(
        new Gson().toJson(responseData),
        headers,
        HttpStatus.OK);
  }
}










