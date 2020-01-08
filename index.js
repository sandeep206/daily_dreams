const program = require('commander');
const { prompt } = require('inquirer');
const { newPrompt } = require('./prompts');
const { fileLocation, getDreams, saveDreams } = require('./utils');
program
  .version('0.0.1')
  .description('dreams do come true!');

program
  .command('new')
  .alias('n')
  .action(() => {
    prompt(newPrompt)
    .then(({defineDream, visualiseDream, realiseDream}) => {
      const key = `daily_dream_${defineDream}`;
      const dreams = getDreams();
      dreams[key] = {
        defineDream,
        visualiseDream,
        realiseDream
      };
      saveDreams(dreams);
    });
  });

  program
   .command('list')
   .alias('l')
   .description('here are the list of dreams, you have')
   .action(() => {
     debugger
     const dreams = getDreams();
     prompt([
       {
         type: 'list',
         name: 'selected',
         message: 'Which dream would you like to see in detail?',
         choices: Object.keys(dreams)
       }
     ]).then(({selected}) => {
       const dream = dreams[selected]
       console.log(JSON.stringify(dream, null, 2));
     });
  });

  program.parse(process.argv);