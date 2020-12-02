# Metode CRUD

Această secțiune include referințele pentru implementarea metodelor CRUD pentru backend

<table>
  <thead>
    <tr>
      <th style="text-align:left">Opera&#x21B;ie</th>
      <th style="text-align:left">Metoda HTTP</th>
      <th style="text-align:left">Express</th>
      <th style="text-align:left">Sequelize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Create</td>
      <td style="text-align:left">POST /resource</td>
      <td style="text-align:left">router.post(&apos;/resource&apos;, handler)</td>
      <td style="text-align:left"><a href="https://sequelize.org/master/manual/model-querying-basics.html#simple-insert-queries">Model.create(data)</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">
        <p>GET /resource</p>
        <p>GET /resource/:id</p>
      </td>
      <td style="text-align:left">
        <p>router.get(&apos;/resource&apos;, handler)</p>
        <p>router.get(&apos;/resource/:id&apos;, handler)</p>
      </td>
      <td style="text-align:left">
        <p><a href="https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries">Model.findAll(options)</a>
        </p>
        <p><a href="https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries">Model.findByPk(id)</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Update</td>
      <td style="text-align:left">PUT /resource/:id</td>
      <td style="text-align:left">router.put(&apos;/resource/:id&apos;, handler)</td>
      <td style="text-align:left"><a href="https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries">obj.update(data)</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Delete</td>
      <td style="text-align:left">DELETE /resource/:id</td>
      <td style="text-align:left">router.delete(&apos;/resource/:id&apos;, handler)</td>
      <td style="text-align:left"><a href="https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries">obj.destoy()</a>
      </td>
    </tr>
  </tbody>
</table>



