import websites from "../data/website.js";

const mainController = {
    showHomePage: (req, res) => {
        res.render('accueil', {websites:websites.slice (0, 3)});  
    },

    showMentionsLegales: (req, res) => {
        res.render('mentions-legales');
    },

    showContact: (req, res) => {
        res.render('contact');
    },

    showTomates: (req, res) => {
        res.render('tomates');
    },    

}
export default mainController;