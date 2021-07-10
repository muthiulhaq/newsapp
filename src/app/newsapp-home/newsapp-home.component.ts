import { Component, OnInit } from '@angular/core';
import { NewsappNewsService } from './../newsapp-news.service';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-newsapp-home',
  templateUrl: './newsapp-home.component.html',
  styleUrls: ['./newsapp-home.component.css']
})
export class NewsappHomeComponent implements OnInit {

  indianNewsDataSet: any; 
  indianNews: any; 
  activeRoutUrl: any;

  constructor(
    private newsService: NewsappNewsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url =>{
      if(url.length != 0) {
        this.activeRoutUrl = url;
      } else {
        this.activeRoutUrl = 'in';
      }
      
     });
     
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.activeRoutUrl}&apiKey=09a724fbe22c4331aad2ab52c04eda64`

    this.indianNewsDataSet = this.newsService.getIndianNews(apiUrl).subscribe( (response) => {
        this.indianNewsDataSet = response;
        this.indianNews = this.indianNewsDataSet.articles;
        console.log(response)
    } );
  }

}
