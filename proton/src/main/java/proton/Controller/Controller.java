package proton.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<?> send(@Valid @RequestBody Message message) {

		String newLine = System.getProperty("line.separator");
		if (message.getEmail() != null) {
			try {
				SimpleMailMessage mail = new SimpleMailMessage();
				mail.setTo(message.getEmail());
				mail.setFrom("protoncontactform@gmail.com");
				mail.setSubject(message.getSubject());
				mail.setText("Dear Madam or Sir," + newLine + "Thank you for contacting us." + newLine
						+ "We will reply as soon as possible." + newLine + "Best regards." + newLine + "Proton team.");

				javaMailSender.send(mail);

			} catch (Exception m) {
			}
			
			try {
				SimpleMailMessage mail2 = new SimpleMailMessage();
				mail2.setTo("isaisaija@gmail.com");
				mail2.setFrom("protoncontactform@gmail.com");
				mail2.setSubject(message.getSubject());
				mail2.setText(message.getMessage() + newLine + newLine + "Sender: " + message.getEmail());
				javaMailSender.send(mail2);

			} catch (Exception m) {
			}
			
			return new ResponseEntity<>(HttpStatus.OK);
			
		} else {
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
	}
}
