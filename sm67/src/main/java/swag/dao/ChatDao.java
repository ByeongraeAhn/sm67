package swag.dao;

import java.util.Map;
import swag.domain.ChatVo;


	public interface ChatDao {
		  
		  int insert(Map<String,Object> paramMap);
		  ChatVo validationString(String inputString);
		  ChatVo getString(String inputString);

		}

