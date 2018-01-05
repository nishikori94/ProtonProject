package proton.Controller;

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

import proton.Model.Message;

@RestController
@RequestMapping("/controller")
public class Controller {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public Controller(final JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	@PostMapping(path = "sendMail")
	@ResponseStatus(HttpStatus.CREATED)
	public void send(@Valid @RequestBody Message message) {
		try {
			SimpleMailMessage mail = new SimpleMailMessage();
			mail.setTo("mgvero94@gmail.com");
			mail.setFrom("isaisaija@gmail.com");
			mail.setSubject(message.getSubject());
			String newLine = System.getProperty("line.separator");
			mail.setText(message.getMessage() + newLine + newLine + "Mail sent from: " + message.getEmail());

			javaMailSender.send(mail);
		} catch (Exception m) {
			m.printStackTrace();

		}
	}
}
