package swag.dao;

import java.util.Map;
import swag.domain.ChatVo;


	public interface ChatDao {
		  
		  int insertString(Map<String,Object> paramMap);
		  ChatVo validationString(String inputString);
		  ChatVo getString(String inputString);

		}

