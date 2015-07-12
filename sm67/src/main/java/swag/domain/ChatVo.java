package swag.domain;

import java.io.Serializable;

public class ChatVo implements Serializable{
	private static final long serialVersionUID = 1L;

	protected String inputString;
	protected String outputString;
	protected int chat_num;
	
	public int getChat_num() {
		return chat_num;
	}
	public void setChat_num(int chat_num) {
		this.chat_num = chat_num;
	}
	protected int	count;
	
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getInputString() {
		return inputString;
	}
	public void setInputString(String inputString) {
		this.inputString = inputString;
	}
	public String getOutputString() {
		return outputString;
	}
	public void setOutputString(String outputString) {
		this.outputString = outputString;
	}
}
