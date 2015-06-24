package swag.dao;

import java.util.Map;

import swag.domain.SwagUserVo;

/* 실습 내용: DAO를 인터페이스로 정의하기 */

public interface SwagUserDao {
  
  int insert(Map<String,Object> paramMap);
  
  SwagUserVo validationUser(String email);
  
  SwagUserVo selectOne(String email); 

}











