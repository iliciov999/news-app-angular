import {Component, OnInit} from '@angular/core';
import * as xml2js from 'xml2js';
import {IRssItem, NewsRss} from './news-rss';
import {NewsPageService} from './newsPage.service';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogBoxComponent} from '../mat-dialog-box/mat-dialog-box.component';

@Component({
  selector: 'app-news-page',
  templateUrl: './newsPage.component.html',
  styleUrls: ['./newsPage.component.scss']
})
export class NewsPageComponent implements OnInit{
  RssData: Array<IRssItem>;
  constructor(private newsService: NewsPageService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newsService.GetRssFeedData().subscribe( x => {
        const parseSreing = xml2js.parseString;
        parseSreing(x, (err, result: NewsRss) => {
          this.RssData = result.rss.channel[0].item;
        });
    });
  }
  openDialog(event, secEvent): void {
      this.dialog.open(MatDialogBoxComponent, {
        data: {
          url: event,
          title: secEvent
        }
      });
  }

}
