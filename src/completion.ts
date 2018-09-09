'use strict';

import * as vscode from 'vscode';
import { resolve } from 'path';

// // get suggestions
// function getSuggestions(cmdlist, currentWord: string, kind: vscode.CompletionItemKind, insertText, matchPredicate): Thenable<vscode.CompletionItem[]> {

//     return new Promise(function (resolve, reject) {
//         cmdlist.then(function (stdout: string) {

//             // match suitable commands 
//             let commands = stdout.split('\n').filter(function (cmd) { return matchPredicate(cmd, currentWord) });
//             if (commands.length > 0) {

//                 // make suggestions from commands
//                 let suggestions = commands.map(function (command_name) {

//                     // make completion item
//                     var item = new vscode.CompletionItem(command_name);
//                     item.kind = kind;
//                     if (insertText == null || insertText == '') {
//                         item.insertText = command_name;
//                     } else {
//                         let snippet = new vscode.SnippetString(insertText(command_name));
//                         item.insertText = snippet;
//                     }
//                     return item;
//                 });
//                 resolve(suggestions);
//             } else {
//                 resolve([]);
//             }

//         }).catch(function (err) {
//             reject(err);
//         });
//     });
// }


// function getXmlKeywordsSuggestions(word:string):Thenable<vscode.CompletionItem[]>{

//     var item = new vscode.CompletionItem("testCompleteItem");
//     item.insertText = "testCompleteInsertText";
//     return new Promise(function (resolve, reject){
//         return item;
//     });
// }

export class Completion implements vscode.CompletionItemProvider{
    // public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):Thenable<vscode.CompletionItem[]> { 
    //    let wordAtPosition = document.getWordRangeAtPosition(position);
    //    var currentWord ='';
    //    if(wordAtPosition && wordAtPosition.start.character < position.character) {
    //        var word = document.getText(wordAtPosition);
    //        currentWord = word.substr(0,position.character - wordAtPosition.start.character); 
    //    } 

    //    return new  Promise(function(){
    //     Promise.all([
    //         getXmlKeywordsSuggestions(currentWord)
    //     ]).then(function(results ){
    //         var suggestions = Array.prototype.concat.apply([],results);
    //         resolve(suggestions);
    //     }).catch();

    //    });
    // }

    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[]{

        let text = document.getText();
        let propertyPattern = / (<property ) /g;
        let propertyPattern1 = /\b[A-Z]{2,}\b/g ;
        let m:RegExpExecArray;
        let val =   propertyPattern.exec(text)
        // while((m = propertyPattern.exec(text)))
        // {

        // }

        var completionItems = [];
        var completionItem = new vscode.CompletionItem("aaa");
        completionItem.label ="testCom";
        completionItem.kind = vscode.CompletionItemKind.Snippet;
        completionItem.detail = "aaa";
        completionItem.filterText = "bbbb";
        //completionItem.insertText = new vscode.SnippetString("aaaa$1bbbb$2cccc");
        completionItems.push(completionItem);
        return completionItems;
    }
    public resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): any{
        return item;
    }
    dispose(){
   
    }
}