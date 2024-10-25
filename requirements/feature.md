# Spend tracker

Here's how to create, view, update, and remove spend trackers using shadcn components:

## View Spend Trackers

UI Flow: Display a list of existing spend trackers with key details.

Components:

* DataTable: To list spend trackers in a tabular format.
* Button: For actions like "Create New Spend Tracker".
* Card: To encapsulate each spend tracker info (optional).

## Create Spend Tracker

UI Flow: User clicks "Create New Spend Tracker" to open a form.

Components:

* Dialog: To display the creation form in a modal.
* Form: Wrapper for form elements.
* Input: For fields like tracker name and limit amount.
* Select: To choose categories or time periods.
* Checkbox: For selecting multiple categories (if applicable).
* DatePicker: For setting custom time periods.
* Button: "Save" and "Cancel" actions.

## Update Spend Tracker

UI Flow: User selects a spend tracker to edit, opening the edit form.

Components:

* Dialog: To display the edit form.
* Form: Pre-filled with the existing spend tracker data.
* Input, Select, Checkbox, DatePicker: As in the creation form.
* Button: "Update" and "Cancel" actions.

## Remove Spend Tracker

UI Flow: User clicks "Delete" on a spend tracker, triggering a confirmation.

Components:

* AlertDialog: To confirm deletion.
* Button: "Delete" and "Cancel" actions within the alert.

## Visualize Spending

UI Flow: Display spending progress relative to the budgeted limit.

Components:

* Progress: To show percentage of budget utilized.
* Chart: For detailed spending over time (e.g., LineChart, BarChart).
* Tabs or SegmentedControl: To switch between different spend trackers or time frames.

## Additional UI Elements

* Navbar: For navigation (already implemented as Nav component).
* Toast: To show success or error messages after actions.
* Skeletons: For loading states while data is fetched.
