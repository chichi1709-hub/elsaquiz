// Nạp trước mọi file quiz. Mỗi file trong quizzes/ gọi registerQuiz({...}) một lần cho mỗi bài.
window.quizRegistry=window.quizRegistry||[];
window.registerQuiz=entry=>{window.quizRegistry.push(entry)};
