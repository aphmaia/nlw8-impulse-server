import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {

  it('Should be able to submit a feedback', async () => { 

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tudo bugado!!',
      screenshot: 'data:image/png;base64,asda6s5d46as5d46a54sd06as'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('Should be able to submit a feedback without type', async () => { 

    await expect(submitFeedback.execute({
      type: '',
      comment: 'Está tudo bugado!!',
      screenshot: 'data:image/png;base64,asda6s5d46as5d46a54sd06as'
    })).rejects.toThrow();
  });

  it('Should be able to submit a feedback without comment', async () => { 

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,asda6s5d46as5d46a54sd06as'
    })).rejects.toThrow();
  });

  it('Should be able to submit a feedback with an screenshot invalid', async () => { 

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tudo bugado!!',
      screenshot: 'teste.jpg'
    })).rejects.toThrow();
  })

})