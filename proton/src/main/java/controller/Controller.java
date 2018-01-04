package controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import model.Message;

@RestController
@RequestMapping("/controller")
public class Controller {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public Controller(final JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	@PostMapping(path = "/sendMessage")
	@ResponseStatus(HttpStatus.CREATED)
	public void save(@Valid @RequestBody Message message) {
		try {
			SimpleMailMessage mail = new SimpleMailMessage();
			mail.setTo("mgvero94@gmail.com");
			mail.setFrom("isaisaija@gmail.com");
			mail.setSubject(message.getSubject());

			mail.setText(message.getMessage() + "/n" + message.getEmail());

			javaMailSender.send(mail);
		} catch (Exception m) {
			m.printStackTrace();

		}
	}
}
