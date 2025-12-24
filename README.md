# Kanban Board

A modern, feature-rich Kanban board application built with Angular 18, featuring drag-and-drop functionality, real-time task management, and a beautiful responsive UI.

## 🚀 Features

- **Drag & Drop**: Seamlessly move tasks between columns with Angular CDK
- **Four Workflow Stages**: To Do, In Progress, Review, and Done
- **Task Management**: Create, delete, and organize tasks
- **Priority Levels**: Assign Low, Medium, or High priority to tasks
- **Assignee Tracking**: Assign team members to specific tasks
- **Real-time Statistics**: Track total tasks across all columns
- **Responsive Design**: Beautiful UI built with Tailwind CSS
- **Modal Interface**: Clean modal for adding new tasks
- **Visual Indicators**: Color-coded columns and priority badges

## 🛠️ Tech Stack

- **Angular 18**: Latest Angular with standalone components
- **TypeScript**: Strongly typed code
- **Angular CDK**: Drag-and-drop functionality
- **Signals**: Modern reactive state management
- **Reactive Forms**: Form validation and handling
- **Tailwind CSS**: Utility-first CSS framework

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18+)
```bash
npm install -g @angular/cli
```

## 📦 Installation

1. **Clone or create the project**
```bash
ng new kanban-board --standalone --routing=false --style=css
cd kanban-board
```

2. **Install Angular CDK**
```bash
npm install @angular/cdk
```

3. **Create folder structure**
```bash
mkdir src/app/models
mkdir src/app/services
mkdir src/app/components/kanban-column
mkdir src/app/components/task-card
mkdir src/app/components/add-task-modal
```

4. **Copy all project files** into their respective directories

## 🖥️ Development Server

To start a local development server, run:
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📁 Project Structure
```
kanban-board/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── task.model.ts
│   │   ├── services/
│   │   │   └── kanban.service.ts
│   │   ├── components/
│   │   │   ├── kanban-column/
│   │   │   │   ├── kanban-column.component.ts
│   │   │   │   └── kanban-column.component.html
│   │   │   ├── task-card/
│   │   │   │   ├── task-card.component.ts
│   │   │   │   └── task-card.component.html
│   │   │   └── add-task-modal/
│   │   │       ├── add-task-modal.component.ts
│   │   │       └── add-task-modal.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── main.ts
│   └── index.html
├── package.json
└── tsconfig.json
```

## 📖 Usage Guide

### Adding a Task
1. Click the **"Add Task"** button in the header
2. Fill in the task details:
   - Title (minimum 3 characters)
   - Description
   - Assignee name
   - Priority level (Low, Medium, High)
   - Starting column
3. Click **"Add Task"** to create

### Moving Tasks
- Click and drag any task card to move it between columns
- Tasks can be reordered within the same column
- Drop the task in the desired position

### Deleting Tasks
- Click the **X** icon in the top-right corner of any task card

## 🔧 Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
```bash
ng generate --help
```

## 🏗️ Building

To build the project run:
```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 🧪 Running Unit Tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:
```bash
ng test
```

## 🔍 Running End-to-End Tests

For end-to-end (e2e) testing, run:
```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## ✨ Key Features Explained

### Drag and Drop
Powered by Angular CDK's drag-drop module, tasks can be:
- Moved between columns
- Reordered within columns
- Dropped in specific positions

### Priority System
Three priority levels with visual indicators:
- **Low**: Green badge and border
- **Medium**: Yellow badge and border
- **High**: Red badge and border

### Column System
Four predefined workflow stages:
- **To Do**: Blue-themed, for new tasks
- **In Progress**: Yellow-themed, for active work
- **Review**: Purple-themed, for tasks under review
- **Done**: Green-themed, for completed tasks

### State Management
Uses Angular Signals for reactive state:
- Automatic UI updates on data changes
- Computed values for statistics
- Type-safe state management

## 🎨 Customization

### Adding New Columns
Edit `src/app/services/kanban.service.ts`:
```typescript
private columnsSignal = signal<Column[]>([
  { id: 'todo', title: 'To Do', tasks: [] },
  { id: 'in-progress', title: 'In Progress', tasks: [] },
  { id: 'review', title: 'Review', tasks: [] },
  { id: 'done', title: 'Done', tasks: [] },
  { id: 'archived', title: 'Archived', tasks: [] }
]);
```

### Changing Colors
Modify Tailwind classes in component templates

### Adding Task Fields
1. Update `Task` interface in `task.model.ts`
2. Add form controls in `add-task-modal.component.ts`
3. Update task card display in `task-card.component.html`

## 🐛 Troubleshooting

### CDK Installation Issues
```bash
npm install @angular/cdk --force
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
ng serve --port 4300
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Future Enhancements

- [ ] Task editing functionality
- [ ] Task search and filters
- [ ] Due dates and reminders
- [ ] Task comments and attachments
- [ ] User authentication
- [ ] Backend integration
- [ ] Dark mode support
- [ ] Export/import functionality
- [ ] Task archive feature
- [ ] Analytics dashboard

## 📚 Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Happy Task Managing! 🚀**