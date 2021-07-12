import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogService } from './blog/blog.service';
import { FooterComponent } from './footer/footer.component';
import { TvComponent } from './tv/tv.component';
import { ProjectComponent } from './portfolio/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    PortfolioComponent,
    BlogComponent,
    BlogListComponent,
    FooterComponent,
    TvComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
