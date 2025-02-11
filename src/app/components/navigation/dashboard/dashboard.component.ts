import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart, { ChartConfiguration, ChartType } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  role=localStorage.getItem('role')


  //LOGIC FOR MANAGER'S DASHBOARD 
  totalProjects = 20;
  liveProject=5;
  completedProject=4;
  droppedProject=11;
  members = [
    { id: 1, name: "John Doe", totalTasks: 50, totalProjects: 5, completedTasks: 40 },
    { id: 2, name: "Jane Smith", totalTasks: 30, totalProjects: 3, completedTasks: 20 },
    { id: 3, name: "Alice Johnson", totalTasks: 40, totalProjects: 4, completedTasks: 30 },
  ];

  deadlineProjects = [
    {id:101, name: "Project Alpha", deadline: "2024-02-15", status: "Near Deadline" },
    {id:102, name: "Project Beta", deadline: "2024-02-10", status: "Missed Deadline" },
  ];

  ngAfterViewInit() {
    this.createProjectChart();
  }

  createProjectChart() {
    new Chart("projectPieChart", {
      type: 'pie',
      data: {
        labels: ["Completed", "Live", "Pending/Dropped"],
        datasets: [{
          data: [this.completedProject,this.liveProject,this.droppedProject],
          backgroundColor: ["#28a745", "#007bff", "#dc3545"]
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  createProject() {
    alert("Create Project Clicked");
  }

  assignMember() {
    alert("Assign Member Clicked");
  }

  viewReports() {
    alert("View Reports Clicked");
  }


  //LOGIC FOR MEMBER'S DASHBOARAD
  projects = [
    { id: 'P101', name: 'Website Revamp', manager: 'John Doe' },
    { id: 'P102', name: 'Mobile App Development', manager: 'Jane Smith' }
  ];

  tasks = [
    { id: 'T201', name: 'UI Design', manager: 'John Doe', dueDate: '2025-02-15', status: 'Accepted' },
    { id: 'T202', name: 'API Integration', manager: 'Jane Smith', dueDate: '2025-02-18', status: 'Pending' },
    { id: 'T203', name: 'Testing', manager: 'John Doe', dueDate: '2025-02-20', status: 'Rejected' }
  ];

  deadlineTasks = this.tasks.filter(task => new Date(task.dueDate) < new Date());

  announcements = [
    { message: 'New task assigned: Database Optimization' },
    { message: 'Your task UI Design has been approved' }
  ];
  
}


